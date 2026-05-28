# Little Haven Storefront

Responsive local shop website for the Little Haven Melbourne nursery furniture stock.

## Run Locally

```powershell
npm start
```

Open `http://127.0.0.1:4173`.

## Included

- 18 product listings with retail prices, available quantities and known dimensions.
- 7 cot, drawer and mattress bundle offers.
- Supplied product photography for confirmed matches.
- Search, category filters, sorting, product detail views and a persistent cart.
- Purchase enquiry form that prepares an order summary.
- Secure Stripe Checkout integration ready for sandbox testing.

## Connect Stripe Sandbox Payments

Stripe does not need to be added to the browser code. Checkout sessions are
created on this local server, so your secret key stays private.

1. In your Stripe sandbox/test dashboard, obtain the secret key beginning with `sk_test_`.
2. Copy `.env.example` to a new file named `.env.local` in this `storefront` folder.
3. In `.env.local`, replace `sk_test_replace_with_your_sandbox_secret_key` with the sandbox secret key.
4. Keep `ALLOW_LIVE_STRIPE_CHECKOUT=false` while testing.
5. Restart the site server, add a non-sleep item such as a toy box or drawer to the cart, and use **Pay securely with Stripe (test mode)**.

Do not paste the secret key into this website, `app.js`, screenshots or chat.
Stripe payment sessions use server-held prices in Australian dollars inclusive
of GST rather than accepting prices from the shopper's browser.

### Sleep Product Payment Gate

Cots, mattresses, bassinets and every cot bundle remain blocked from online
payment by default. After required safety information and online warnings have
been confirmed, change the following local setting and restart the server:

```ini
ALLOW_SLEEP_PRODUCT_CHECKOUT=true
```

For live payments, complete your order confirmation, delivery, privacy,
refund/returns and payment-confirmation process before setting:

```ini
ALLOW_LIVE_STRIPE_CHECKOUT=true
```

## Before Publishing

- Add the real contact route, delivery terms, returns policy and privacy policy.
- Add Stripe payment-confirmation/webhook handling before fulfilling paid orders.
- Confirm available stock and all photo-to-product matches.
- Confirm mandatory safety information and online warnings for cots, bassinets and mattresses before accepting sales.

## GitHub Upload Notes

Upload the files in this folder to your GitHub repository. Do not upload `.env.local`.

For a live site with Stripe Checkout, deploy to a host that can run server
functions. Vercel is supported through the `/api` functions in this project.
GitHub Pages can host the static front end, but it cannot run checkout
sessions on its own.

In your live hosting dashboard, set these environment variables privately:

```ini
STRIPE_PUBLISHABLE_KEY=pk_live_or_test_publishable_key_here
STRIPE_SECRET_KEY=sk_live_or_test_key_here
ALLOW_SLEEP_PRODUCT_CHECKOUT=false
ALLOW_LIVE_STRIPE_CHECKOUT=false
```

For Vercel, add the variables with those exact names in Project Settings >
Environment Variables, then redeploy. Stripe Checkout will not show as enabled
unless `STRIPE_SECRET_KEY` is set to a key starting with `sk_test_` or an
approved live key starting with `sk_live_`.

Only turn live checkout on after your product safety, stock, delivery, privacy
and refund processes are ready.
