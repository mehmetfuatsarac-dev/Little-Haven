import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  CheckoutError,
  createStripeCheckoutSession,
  getRequestOrigin,
  getStripePublicConfig,
} from "./stripe-server.mjs";

const root = path.dirname(fileURLToPath(import.meta.url));
await loadLocalEnvironment();
const port = Number(process.env.PORT || 4173);
const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

async function loadLocalEnvironment() {
  try {
    const body = await readFile(path.join(root, ".env.local"), "utf8");
    for (const line of body.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
      if (!match || match[1].startsWith("#") || process.env[match[1]] !== undefined) continue;
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  } catch {
    // Configuration is optional until the merchant connects Stripe.
  }
}

function resolveRequest(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const requested = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const candidate = path.resolve(root, requested);
  if (!candidate.startsWith(root + path.sep) && candidate !== root) {
    return null;
  }
  return candidate;
}

function writeJson(response, status, payload) {
  response.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  response.end(JSON.stringify(payload));
}

async function readJson(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 100_000) throw new Error("Request too large.");
  }
  return JSON.parse(body || "{}");
}

async function createStripeSession(request, response) {
  try {
    const payload = await readJson(request);
    const origin = getRequestOrigin(request.headers, `http://${request.headers.host || `127.0.0.1:${port}`}`);
    const result = await createStripeCheckoutSession(payload, origin);
    writeJson(response, 200, result);
  } catch (error) {
    writeJson(response, error instanceof CheckoutError ? error.statusCode : 400, {
      error: error.message || "Unable to prepare checkout.",
    });
  }
}

createServer(async (request, response) => {
  const requestUrl = new URL(request.url, `http://127.0.0.1:${port}`);
  if (request.method === "GET" && requestUrl.pathname === "/api/stripe-config") {
    writeJson(response, 200, getStripePublicConfig());
    return;
  }
  if (request.method === "POST" && requestUrl.pathname === "/api/create-checkout-session") {
    await createStripeSession(request, response);
    return;
  }

  const filePath = resolveRequest(request.url);
  if (!filePath) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  try {
    const info = await stat(filePath);
    if (!info.isFile()) throw new Error("Not a file");
    const body = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Little Haven storefront running at http://127.0.0.1:${port}`);
});
