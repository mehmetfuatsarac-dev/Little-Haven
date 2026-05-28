import {
  CheckoutError,
  createStripeCheckoutSession,
  getRequestOrigin,
  readRequestJson,
} from "../stripe-server.mjs";

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    const payload = await readRequestJson(request);
    const origin = getRequestOrigin(request.headers, `https://${request.headers.host}`);
    const result = await createStripeCheckoutSession(payload, origin);
    response.setHeader("Cache-Control", "no-store");
    response.status(200).json(result);
  } catch (error) {
    const statusCode = error instanceof CheckoutError ? error.statusCode : 400;
    response.setHeader("Cache-Control", "no-store");
    response.status(statusCode).json({ error: error.message || "Unable to prepare checkout." });
  }
}
