const products = [
  {
    id: "BC-1501",
    name: "5 in 1 Sleigh Cot White",
    category: "Cots",
    price: 600,
    stock: 40,
    dimensions: "1470 x 760 x 1090 mm; mattress space 1300 x 690 mm",
    description: "A classic white sleigh-style cot designed as a centrepiece for a complete nursery setting.",
    image: null,
    sleep: true,
  },
  {
    id: "BC-1901",
    name: "Two Tone Cot White",
    category: "Cots",
    price: 700,
    stock: 20,
    dimensions: "1392 x 740 x 900 mm; mattress space 1300 x 690 mm",
    description: "A contemporary cot with warm two-tone detailing for a softer neutral nursery palette.",
    image: "./assets/products/Two tone cot.jpg",
    sleep: true,
  },
  {
    id: "BC-1505",
    name: "Contemporary Cot White",
    category: "Cots",
    price: 700,
    stock: 16,
    dimensions: "1420 x 810 x 900 mm; mattress space 1300 x 690 mm",
    description: "Clean white contemporary styling suited to modern nursery furniture combinations.",
    image: "./assets/products/Contemporary Cot.jpg",
    sleep: true,
  },
  {
    id: "BC-1721",
    name: "Royal Cot White",
    category: "Cots",
    price: 800,
    stock: 8,
    dimensions: "1570 x 764 x 1000 mm; mattress space 1300 x 690 mm",
    description: "A generous white cot with shaped ends and a statement Royal nursery look.",
    image: "./assets/products/Royal Cot.jpg",
    sleep: true,
  },
  {
    id: "MODERN",
    name: "Modern Cot White (Slat Ends)",
    category: "Cots",
    price: 350,
    stock: 10,
    dimensions: "1340 x 740 x 820 mm; mattress space 1300 x 690 mm",
    description: "A simple white slat-end cot for a practical and affordable nursery setup.",
    image: null,
    sleep: true,
  },
  {
    id: "BC-1808",
    name: "Heritage Cot White",
    category: "Cots",
    price: 650,
    stock: 5,
    dimensions: "1420 x 785 x 1165 mm; mattress space 1300 x 690 mm",
    description: "A white Heritage cot with timeless lines for a styled nursery room.",
    image: "./assets/products/Heritage Cot.jpg",
    sleep: true,
  },
  {
    id: "MATTRESS",
    name: "Cot Mattress",
    category: "Sleep Essentials",
    price: 100,
    stock: 100,
    dimensions: "1300 x 690 x 100 mm",
    description: "Cot mattress sized for the listed cot mattress spaces. Confirm compatibility before ordering.",
    image: null,
    sleep: true,
  },
  {
    id: "BF-2108",
    name: "7 Drawer Chest",
    category: "Storage",
    price: 1050,
    stock: 15,
    dimensions: "1285 x 510 x 815 mm",
    description: "Wide seven-drawer nursery storage with generous capacity for clothing and essentials.",
    image: "./assets/products/7 drawer chest.jpg",
  },
  {
    id: "BF-1808",
    name: "6 Drawer Chest White",
    category: "Storage",
    price: 850,
    stock: 15,
    dimensions: "1285 x 510 x 888 mm",
    description: "Six-drawer white chest offering broad storage and a clean nursery finish.",
    image: "./assets/products/6drawer_chesttop.jpg",
  },
  {
    id: "CT-07",
    name: "4 Drawer Chest White",
    category: "Storage",
    price: 499,
    stock: 30,
    dimensions: "880 x 640 x 895 mm",
    description: "Compact four-drawer storage suited to nursery corners and change-time organisation.",
    image: "./assets/products/Tall boy.jpg",
  },
  {
    id: "CT-16",
    name: "3 Drawer Change Table with Mattress",
    category: "Change Tables",
    price: 400,
    stock: 50,
    dimensions: "800 x 620 x 970 mm",
    description: "White three-drawer change table supplied with a matching change mattress.",
    image: null,
  },
  {
    id: "BF-1801",
    name: "Royal 7 Drawer Dresser White",
    category: "Storage",
    price: 1050,
    stock: 8,
    dimensions: "1350 x 520 x 845 mm",
    description: "Premium Royal dresser storage to coordinate with the Royal cot collection.",
    image: "./assets/products/Royal 7 drawer chest.jpg",
  },
  {
    id: "CT-1722",
    name: "Royal 3 Drawer Dresser White",
    category: "Storage",
    price: 550,
    stock: 4,
    dimensions: "940 x 488 x 830 mm",
    description: "Compact three-drawer Royal dresser for smaller nursery spaces.",
    image: null,
  },
  {
    id: "CT-1805-1",
    name: "Chest Top Oak",
    category: "Change Tables",
    price: 40,
    stock: 40,
    dimensions: "Compatibility to be confirmed",
    description: "Oak-finish chest top accessory. Confirm compatible dresser and fit before ordering.",
    image: null,
  },
  {
    id: "CHANGE-PAD",
    name: "Change Pad for 4 Drawer Tallboy",
    category: "Change Tables",
    price: 20,
    stock: 10,
    dimensions: "750 x 500 mm",
    description: "Change pad intended for a compatible four-drawer tallboy setup.",
    image: null,
  },
  {
    id: "BC-1506",
    name: "Bedside Bassinet with Mattress",
    category: "Sleep Essentials",
    price: 220,
    stock: 20,
    dimensions: "970 x 540 x 920 mm",
    description: "Bedside bassinet in white supplied with mattress for an early nursery setup.",
    image: "./assets/products/amandabassinet1600300320_442da0de-e696-4ce1-bf94-e1b9f8f16024_5000x.jpg",
    sleep: true,
  },
  {
    id: "TOY-BOX",
    name: "Toy Box White",
    category: "Playroom",
    price: 250,
    stock: 10,
    dimensions: "Dimensions available on enquiry",
    description: "White toy box storage for a tidy nursery or playroom.",
    image: "./assets/products/toy-box_5000x.jpg",
  },
  {
    id: "BF-2107",
    name: "Toy Shelf White",
    category: "Playroom",
    price: 480,
    stock: 5,
    dimensions: "800 x 267 (472) x 1691 mm",
    description: "Tall toy shelf in white for accessible display and organised playroom storage.",
    image: "./assets/products/ToyShelf1_5000x.jpg",
  },
];

const bundles = [
  {
    id: "bundle-sleigh",
    name: "Sleigh Cot Change Nursery Set",
    items: "5 in 1 Sleigh Cot + 3 Drawer Change Table with mattress + Cot Mattress",
    price: 999,
    compareAt: 1100,
    stock: 40,
    image: null,
    sleep: true,
    featured: true,
  },
  {
    id: "bundle-two-tone",
    name: "Two Tone Large Storage Set",
    items: "Two Tone Cot + 7 Drawer Chest + Cot Mattress",
    price: 1649,
    compareAt: 1850,
    stock: 15,
    image: "./assets/products/Two tone cot.jpg",
    sleep: true,
    featured: true,
  },
  {
    id: "bundle-contemporary",
    name: "Contemporary Storage Set",
    items: "Contemporary Cot + 6 Drawer Chest + Cot Mattress",
    price: 1499,
    compareAt: 1650,
    stock: 15,
    image: "./assets/products/Contemporary Cot.jpg",
    sleep: true,
  },
  {
    id: "bundle-royal-compact",
    name: "Royal Compact Nursery Set",
    items: "Royal Cot + Royal 3 Drawer Dresser + Cot Mattress",
    price: 1299,
    compareAt: 1450,
    stock: 4,
    image: "./assets/products/Royal cot+ change table.jpg",
    sleep: true,
  },
  {
    id: "bundle-royal-premium",
    name: "Royal Premium Nursery Set",
    items: "Royal Cot + Royal 7 Drawer Dresser + Cot Mattress",
    price: 1749,
    compareAt: 1950,
    stock: 4,
    image: "./assets/products/Royal Cot.jpg",
    sleep: true,
  },
  {
    id: "bundle-modern",
    name: "Modern Essentials Set",
    items: "Modern Cot + 4 Drawer Chest + Cot Mattress",
    price: 849,
    compareAt: 949,
    stock: 10,
    image: null,
    sleep: true,
  },
  {
    id: "bundle-heritage",
    name: "Heritage Nursery Set",
    items: "Heritage Cot + 4 Drawer Chest + Cot Mattress",
    price: 1129,
    compareAt: 1249,
    stock: 5,
    image: "./assets/products/Heritage Cot +tall boy.jpg",
    sleep: true,
  },
];

const catalogue = new Map([
  ...products.map((product) => [product.id, { ...product, type: "Product" }]),
  ...bundles.map((bundle) => [bundle.id, { ...bundle, type: "Bundle" }]),
]);
const number = new Intl.NumberFormat("en-AU", { maximumFractionDigits: 0 });
const money = {
  format(value) {
    return `A$${number.format(value)}`;
  },
};
const state = {
  cart: JSON.parse(localStorage.getItem("little-haven-cart") || "{}"),
  query: "",
  category: "all",
  sort: "featured",
};

const productGrid = document.querySelector("#product-grid");
const bundleGrid = document.querySelector("#bundle-grid");
const categorySelect = document.querySelector("#category");
const searchInput = document.querySelector("#search");
const sortSelect = document.querySelector("#sort");
const resultsCount = document.querySelector("#results-count");
const cartDrawer = document.querySelector("#cart-drawer");
const cartBackdrop = document.querySelector("#cart-backdrop");
const cartLines = document.querySelector("#cart-lines");
const cartTotal = document.querySelector("#cart-total");
const cartCount = document.querySelector("#cart-count");
const productDialog = document.querySelector("#product-dialog");
const productDetail = document.querySelector("#product-detail");
const checkoutDialog = document.querySelector("#checkout-dialog");
const checkoutOrder = document.querySelector("#checkout-order");
const checkoutForm = document.querySelector("#checkout-form");
const enquiryResult = document.querySelector("#enquiry-result");
const enquiryText = document.querySelector("#enquiry-text");
const toast = document.querySelector("#toast");
const payStripeButton = document.querySelector("#pay-stripe");
const paymentStatus = document.querySelector("#payment-status");
let stripeConfig = {
  configured: false,
  mode: "not-configured",
  allowSleepProductCheckout: false,
  publishableConfigured: false,
};

function placeholder(name) {
  return `
    <div class="media-placeholder">
      <span>${name}</span>
      <span class="photo-pending">Product photo coming soon</span>
    </div>
  `;
}

function media(item, className = "") {
  if (!item.image) {
    return placeholder(item.name);
  }
  return `<img class="${className}" src="${item.image}" alt="${item.name}" loading="lazy">`;
}

function saveCart() {
  localStorage.setItem("little-haven-cart", JSON.stringify(state.cart));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("visible"), 2100);
}

function renderBundles() {
  bundleGrid.innerHTML = bundles
    .map((bundle) => {
      const saving = bundle.compareAt - bundle.price;
      return `
        <article class="bundle-card ${bundle.featured ? "featured" : ""}">
          <div class="media">
            ${media(bundle)}
            <span class="sale-chip">Save ${money.format(saving)}</span>
          </div>
          <div class="bundle-content">
            <h3>${bundle.name}</h3>
            <p class="bundle-items">${bundle.items}</p>
            <div class="price-line">
              <span class="price">${money.format(bundle.price)}</span>
              <span class="compare">${money.format(bundle.compareAt)}</span>
              <span class="saving">${bundle.stock} sets available</span>
            </div>
            <div class="card-actions">
              <button class="button primary add" type="button" data-add="${bundle.id}">Add bundle</button>
              <button class="details-button" type="button" data-detail="${bundle.id}">Details</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-media">
        ${media(product)}
        ${product.sleep ? '<span class="sleep-chip">Sleep item info</span>' : ""}
      </div>
      <div class="product-content">
        <p class="product-category">${product.category}</p>
        <h3>${product.name}</h3>
        <p class="product-meta">${product.dimensions}</p>
        <div class="price-line">
          <span class="price">${money.format(product.price)}</span>
        </div>
        <span class="stock">${product.stock} available</span>
        <div class="card-actions">
          <button class="button primary add" type="button" data-add="${product.id}">Add</button>
          <button class="details-button" type="button" data-detail="${product.id}">Details</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  const query = state.query.toLowerCase();
  let visible = products.filter((product) => {
    const matchingCategory = state.category === "all" || product.category === state.category;
    const matchingQuery = `${product.name} ${product.category} ${product.id}`.toLowerCase().includes(query);
    return matchingCategory && matchingQuery;
  });

  if (state.sort === "low") visible.sort((a, b) => a.price - b.price);
  if (state.sort === "high") visible.sort((a, b) => b.price - a.price);
  if (state.sort === "name") visible.sort((a, b) => a.name.localeCompare(b.name));

  resultsCount.textContent = `${visible.length} product${visible.length === 1 ? "" : "s"} shown`;
  productGrid.innerHTML = visible.length
    ? visible.map(productCard).join("")
    : '<p class="empty-cart">No products match this search.</p>';
}

function addToCart(id) {
  const item = catalogue.get(id);
  if (!item) return;
  const quantity = state.cart[id] || 0;
  if (quantity >= item.stock) {
    showToast("Maximum available quantity already selected.");
    return;
  }
  state.cart[id] = quantity + 1;
  saveCart();
  renderCart();
  showToast(`${item.name} added to cart`);
}

function changeQuantity(id, amount) {
  const item = catalogue.get(id);
  if (!item) return;
  const next = (state.cart[id] || 0) + amount;
  if (next <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = Math.min(item.stock, next);
  }
  saveCart();
  renderCart();
}

function cartItems() {
  return Object.entries(state.cart)
    .map(([id, quantity]) => ({ item: catalogue.get(id), quantity }))
    .filter(({ item }) => item);
}

function cartAmount() {
  return cartItems().reduce((total, { item, quantity }) => total + item.price * quantity, 0);
}

function renderCart() {
  const lines = cartItems();
  const count = lines.reduce((total, line) => total + line.quantity, 0);
  cartCount.textContent = count;
  cartTotal.textContent = money.format(cartAmount());
  if (!lines.length) {
    cartLines.innerHTML = '<p class="empty-cart">Your cart is empty. Add a bundle or individual product to begin an enquiry.</p>';
    return;
  }
  cartLines.innerHTML = lines
    .map(({ item, quantity }) => `
      <article class="cart-line">
        <div>
          <h3>${item.name}</h3>
          <small>${item.type} &middot; ${money.format(item.price)} each</small>
          <div class="quantity" aria-label="Quantity">
            <button type="button" data-decrease="${item.id}" aria-label="Decrease ${item.name} quantity">-</button>
            <span>${quantity}</span>
            <button type="button" data-increase="${item.id}" aria-label="Increase ${item.name} quantity">+</button>
            <button class="remove" type="button" data-remove="${item.id}">Remove</button>
          </div>
        </div>
        <span class="line-price">${money.format(item.price * quantity)}</span>
      </article>
    `)
    .join("");
}

function openCart() {
  cartDrawer.classList.add("active");
  cartDrawer.setAttribute("aria-hidden", "false");
  cartBackdrop.hidden = false;
  document.body.classList.add("locked");
  document.querySelector("#close-cart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartDrawer.setAttribute("aria-hidden", "true");
  cartBackdrop.hidden = true;
  document.body.classList.remove("locked");
}

function openDetails(id) {
  const item = catalogue.get(id);
  if (!item) return;
  const isBundle = item.type === "Bundle";
  const sleepNote = item.sleep
    ? '<p class="sleep-note">Product safety information and applicable warnings are confirmed before the sale of this sleep item.</p>'
    : "";
  productDetail.innerHTML = `
    <div class="detail-layout">
      <div class="detail-media">${media(item)}</div>
      <div class="detail-content">
        <p class="product-category">${item.type}${isBundle ? "" : ` / ${item.category}`}</p>
        <h2>${item.name}</h2>
        <div class="price-line">
          <span class="price">${money.format(item.price)}</span>
          ${isBundle ? `<span class="compare">${money.format(item.compareAt)}</span>` : ""}
        </div>
        <p class="detail-description">${isBundle ? item.items : item.description}</p>
        ${sleepNote}
        <dl class="specs">
          <div><dt>Available stock</dt><dd>${item.stock} ${isBundle ? "sets" : "units"}</dd></div>
          ${isBundle ? "" : `<div><dt>Dimensions</dt><dd>${item.dimensions}</dd></div>`}
          <div><dt>Price basis</dt><dd>AUD incl. GST</dd></div>
        </dl>
        <button class="button primary wide" type="button" data-add="${item.id}">Add to cart</button>
      </div>
    </div>
  `;
  productDialog.showModal();
}

function renderCheckoutOrder() {
  checkoutOrder.innerHTML = cartItems()
    .map(({ item, quantity }) => `
      <div class="checkout-summary-line">
        <span>${quantity} x ${item.name}</span>
        <strong>${money.format(item.price * quantity)}</strong>
      </div>
    `)
    .join("") + `
      <div class="checkout-summary-total">
        <span>Total incl. GST</span>
        <strong>${money.format(cartAmount())}</strong>
      </div>
    `;
}

async function getStripeConfig() {
  try {
    const response = await fetch("./api/stripe-config", { cache: "no-store" });
    if (response.ok) {
      stripeConfig = await response.json();
    } else {
      stripeConfig = {
        configured: false,
        mode: "api-missing",
        allowSleepProductCheckout: false,
        publishableConfigured: false,
      };
    }
  } catch {
    stripeConfig = {
      configured: false,
      mode: "api-unreachable",
      allowSleepProductCheckout: false,
      publishableConfigured: false,
    };
  }
  return stripeConfig;
}

function updateStripePaymentState() {
  const includesSleepProduct = cartItems().some(({ item }) => item.sleep);
  if (!stripeConfig.configured) {
    payStripeButton.disabled = true;
    payStripeButton.textContent = stripeConfig.publishableConfigured
      ? "Add Stripe secret key to enable payment"
      : "Connect Stripe sandbox to enable payment";
    paymentStatus.className = "payment-status";
    if (stripeConfig.mode === "api-missing" || stripeConfig.mode === "api-unreachable") {
      paymentStatus.textContent = "The Vercel checkout API is not available yet. Redeploy the latest site files, including the api folder.";
    } else if (stripeConfig.mode === "live") {
      paymentStatus.textContent = "Live Stripe checkout is locked. Set ALLOW_LIVE_STRIPE_CHECKOUT=true only when you are ready to launch.";
    } else {
      paymentStatus.textContent = "Add STRIPE_SECRET_KEY in Vercel with your sk_test key, then redeploy the site.";
    }
    return;
  }
  if (includesSleepProduct && !stripeConfig.allowSleepProductCheckout) {
    payStripeButton.disabled = true;
    payStripeButton.textContent = "Payment available after product confirmation";
    paymentStatus.className = "payment-status blocked";
    paymentStatus.textContent = "This cart contains a cot, mattress or bassinet. Prepare an enquiry first so required product information can be confirmed.";
    return;
  }
  payStripeButton.disabled = false;
  payStripeButton.textContent = stripeConfig.mode === "test"
    ? "Pay securely with Stripe (test mode)"
    : "Pay securely with Stripe";
  paymentStatus.className = "payment-status";
  paymentStatus.textContent = stripeConfig.mode === "test"
    ? "Sandbox payment only: no real charge will be taken during testing."
    : "You will be redirected to secure Stripe checkout.";
}

async function openCheckout() {
  if (!cartItems().length) {
    showToast("Add an item before preparing your enquiry.");
    return;
  }
  closeCart();
  enquiryResult.hidden = true;
  renderCheckoutOrder();
  await getStripeConfig();
  updateStripePaymentState();
  checkoutDialog.showModal();
}

function prepareEnquiry(event) {
  event.preventDefault();
  const details = new FormData(checkoutForm);
  const lines = cartItems()
    .map(({ item, quantity }) => `- ${quantity} x ${item.name}: ${money.format(item.price * quantity)}`)
    .join("\n");
  const text = [
    "PURCHASE ENQUIRY - LITTLE HAVEN",
    "",
    `Name: ${details.get("name")}`,
    `Email: ${details.get("email")}`,
    `Phone: ${details.get("phone")}`,
    `Suburb / postcode: ${details.get("suburb")}`,
    `Fulfilment: ${details.get("delivery")}`,
    "",
    "Requested products:",
    lines,
    `Total incl. GST: ${money.format(cartAmount())}`,
    "",
    `Notes: ${details.get("notes") || "None provided"}`,
    "",
    "Subject to availability, delivery quote and required product information confirmation.",
  ].join("\n");
  enquiryText.textContent = text;
  enquiryResult.hidden = false;
  enquiryResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

async function startStripeCheckout() {
  if (!checkoutForm.reportValidity()) return;
  payStripeButton.disabled = true;
  payStripeButton.textContent = "Preparing secure checkout...";
  const details = new FormData(checkoutForm);
  try {
    const response = await fetch("./api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: details.get("email"),
        items: cartItems().map(({ item, quantity }) => ({ id: item.id, quantity })),
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      updateStripePaymentState();
      paymentStatus.className = "payment-status blocked";
      paymentStatus.textContent = result.error || "Unable to open Stripe checkout.";
      showToast("Payment cannot be started yet.");
      return;
    }
    window.location.assign(result.url);
  } catch {
    updateStripePaymentState();
    paymentStatus.className = "payment-status blocked";
    paymentStatus.textContent = "Secure checkout could not be reached. Please prepare an enquiry instead.";
  }
}

async function copyEnquiry() {
  try {
    await navigator.clipboard.writeText(enquiryText.textContent);
    showToast("Enquiry copied.");
  } catch {
    showToast("Select the enquiry text and copy it manually.");
  }
}

function setupCategories() {
  [...new Set(products.map((product) => product.category))].forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.append(option);
  });
}

document.addEventListener("click", (event) => {
  const add = event.target.closest("[data-add]");
  const detail = event.target.closest("[data-detail]");
  const decrease = event.target.closest("[data-decrease]");
  const increase = event.target.closest("[data-increase]");
  const remove = event.target.closest("[data-remove]");
  if (add) addToCart(add.dataset.add);
  if (detail) openDetails(detail.dataset.detail);
  if (decrease) changeQuantity(decrease.dataset.decrease, -1);
  if (increase) changeQuantity(increase.dataset.increase, 1);
  if (remove) changeQuantity(remove.dataset.remove, -(state.cart[remove.dataset.remove] || 0));
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value.trim();
  renderProducts();
});
categorySelect.addEventListener("change", () => {
  state.category = categorySelect.value;
  renderProducts();
});
sortSelect.addEventListener("change", () => {
  state.sort = sortSelect.value;
  renderProducts();
});
document.querySelector("#open-cart").addEventListener("click", openCart);
document.querySelector("#close-cart").addEventListener("click", closeCart);
document.querySelector("#continue-shopping").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);
document.querySelector("#start-checkout").addEventListener("click", openCheckout);
document.querySelector("[data-close-dialog]").addEventListener("click", () => productDialog.close());
document.querySelector("[data-close-checkout]").addEventListener("click", () => checkoutDialog.close());
checkoutForm.addEventListener("submit", prepareEnquiry);
payStripeButton.addEventListener("click", startStripeCheckout);
document.querySelector("#copy-enquiry").addEventListener("click", copyEnquiry);

setupCategories();
renderBundles();
renderProducts();
renderCart();
