import { checkoutProducts } from "./checkout-products.mjs";

export class CheckoutError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = "CheckoutError";
    this.statusCode = statusCode;
  }
}

function firstSetEnv(names) {
  for (const name of names) {
    const value = process.env[name]?.trim();
    if (value) return value;
  }
  return "";
}

export function getStripeSecretKey() {
  return firstSetEnv(["STRIPE_SECRET_KEY", "STRIPE_TEST_SECRET_KEY", "STRIPE_SANDBOX_SECRET_KEY"]);
}

export function getStripePublishableKey() {
  return firstSetEnv(["STRIPE_PUBLISHABLE_KEY", "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY"]);
}

export function getStripeMode(secretKey = getStripeSecretKey()) {
  if (secretKey.startsWith("sk_test_")) return "test";
  if (secretKey.startsWith("sk_live_")) return "live";
  return "not-configured";
}

export function getStripePublicConfig() {
  const secretKey = getStripeSecretKey();
  const mode = getStripeMode(secretKey);
  const allowLiveCheckout = process.env.ALLOW_LIVE_STRIPE_CHECKOUT === "true";
  return {
    configured: mode === "test" || (mode === "live" && allowLiveCheckout),
    mode,
    allowSleepProductCheckout: process.env.ALLOW_SLEEP_PRODUCT_CHECKOUT === "true",
    publishableConfigured: Boolean(getStripePublishableKey()),
  };
}

export function getRequestOrigin(headers, fallbackOrigin) {
  const protocol = firstHeader(headers, "x-forwarded-proto") || "https";
  const host = firstHeader(headers, "x-forwarded-host") || firstHeader(headers, "host");
  return host ? `${protocol}://${host}` : fallbackOrigin;
}

export async function readRequestJson(request) {
  if (request.body && typeof request.body === "object" && !Buffer.isBuffer(request.body)) {
    return request.body;
  }
  if (typeof request.body === "string" || Buffer.isBuffer(request.body)) {
    return JSON.parse(request.body.toString() || "{}");
  }

  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 100_000) throw new CheckoutError(413, "Request too large.");
  }
  return JSON.parse(body || "{}");
}

export async function createStripeCheckoutSession(payload, origin) {
  const secretKey = getStripeSecretKey();
  const mode = getStripeMode(secretKey);
  const allowLiveCheckout = process.env.ALLOW_LIVE_STRIPE_CHECKOUT === "true";
  const allowSleepProductCheckout = process.env.ALLOW_SLEEP_PRODUCT_CHECKOUT === "true";

  if (!secretKey) {
    throw new CheckoutError(503, "Stripe secret key is not configured in Vercel yet.");
  }
  if (mode === "not-configured") {
    throw new CheckoutError(503, "Stripe secret key must start with sk_test_ or sk_live_.");
  }
  if (mode === "live" && !allowLiveCheckout) {
    throw new CheckoutError(503, "Live Stripe payments are disabled until launch approval is enabled.");
  }

  const items = validatedLineItems(payload.items);
  if (items.some((item) => item.sleep) && !allowSleepProductCheckout) {
    throw new CheckoutError(
      409,
      "Sleep products require confirmed safety information before payment. Please submit an enquiry first.",
    );
  }

  const parameters = new URLSearchParams({
    mode: "payment",
    success_url: `${origin}/payment-success.html?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/payment-cancelled.html`,
    "metadata[source]": "little_haven_storefront",
  });
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    parameters.set("customer_email", email);
  }
  items.forEach((item, index) => {
    const prefix = `line_items[${index}]`;
    parameters.set(`${prefix}[price_data][currency]`, "aud");
    parameters.set(`${prefix}[price_data][unit_amount]`, String(item.price * 100));
    parameters.set(`${prefix}[price_data][tax_behavior]`, "inclusive");
    parameters.set(`${prefix}[price_data][product_data][name]`, item.name);
    parameters.set(`${prefix}[quantity]`, String(item.quantity));
  });

  const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${secretKey}:`).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: parameters,
  });
  const session = await stripeResponse.json();
  if (!stripeResponse.ok || !session.url) {
    throw new CheckoutError(502, session.error?.message || "Stripe could not create a checkout session.");
  }
  return { url: session.url, mode };
}

function validatedLineItems(items) {
  if (!Array.isArray(items) || !items.length) {
    throw new CheckoutError(400, "Your cart is empty.");
  }
  return items.map(({ id, quantity }) => {
    const product = checkoutProducts.get(id);
    const safeQuantity = Number(quantity);
    if (!product || !Number.isInteger(safeQuantity) || safeQuantity < 1 || safeQuantity > product.stock) {
      throw new CheckoutError(400, "One or more selected items are invalid or unavailable.");
    }
    return { id, quantity: safeQuantity, ...product };
  });
}

function firstHeader(headers, name) {
  const value = headers?.[name] ?? headers?.[name.toLowerCase()];
  return Array.isArray(value) ? value[0] : value;
}
