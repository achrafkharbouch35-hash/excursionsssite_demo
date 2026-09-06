/* =====================================================
   LUNAÉ — script.js
   ---------------------------------------------------
   ZONE DE CONFIGURATION RAPIDE
   Modifiez ces valeurs pour adapter le site à votre
   boutique (nom, numéro WhatsApp, Instagram, produits).
===================================================== */

const STORE = {
  name: "LUNAÉ",
  whatsappNumber: "212XXXXXXXXX", // <-- remplacez par votre numéro (format international, sans + ni espaces)
  instagram: "https://instagram.com/lunae.boutique",
  currency: "DH"
};

/* ---------------------------------------------------
   CATALOGUE PRODUITS
   Ajoutez / modifiez / supprimez des produits ici.
   "images" : mettez vos propres URLs de photos.
--------------------------------------------------- */
const PRODUCTS = [
  { id: 1,  name: "Pyjama Satin Rose",        category: "Pyjamas",   price: 249, oldPrice: 299, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Rose", hex:"#E3B6AE"},{name:"Ivoire", hex:"#F4EEE4"}],
    description: "Un pyjama en satin doux au toucher, coupe fluide et taille élastique pour un confort absolu en toute saison." },

  { id: 2,  name: "Pyjama Satin Noir",        category: "Pyjamas",   price: 259, oldPrice: null, badge: "Best Seller",
    images: ["https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Noir", hex:"#241E1C"},{name:"Bordeaux", hex:"#6E2E33"}],
    description: "L'élégance intemporelle du satin noir. Un indispensable chic pour vos soirées cocooning." },

  { id: 3,  name: "Pyjama Coton Beige",       category: "Pyjamas",   price: 219, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Beige", hex:"#E9DFD1"},{name:"Blanc", hex:"#FFFFFF"}],
    description: "Coton 100% respirant, doux pour la peau. Idéal pour les nuits chaudes et les matins tranquilles." },

  { id: 4,  name: "Ensemble Homewear Crème",  category: "Ensembles", price: 289, oldPrice: 340, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Crème", hex:"#F1E7D8"}],
    description: "Un ensemble deux pièces pensé pour rester élégante même à la maison. Matière ultra-douce." },

  { id: 5,  name: "Ensemble Rose Poudré",     category: "Ensembles", price: 299, oldPrice: null, badge: "Best Seller",
    images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80"],
    sizes: ["XS","S","M","L"], colors: [{name:"Rose poudré", hex:"#F1DCD6"},{name:"Gris", hex:"#B8AFA8"}],
    description: "Notre best-seller : un ensemble fluide et féminin, parfait pour toutes vos journées cocon." },

  { id: 6,  name: "Ensemble Noir Chic",       category: "Ensembles", price: 309, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Noir", hex:"#241E1C"}],
    description: "Coupe ample et matière fluide pour un look homewear raffiné en toutes circonstances." },

  { id: 7,  name: "Robe Élégante Satin",      category: "Vêtements", price: 349, oldPrice: 399, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=80"],
    sizes: ["XS","S","M","L"], colors: [{name:"Champagne", hex:"#E8D8BE"},{name:"Noir", hex:"#241E1C"}],
    description: "Une robe fluide en satin, taille cintrée et tombé impeccable pour sublimer votre silhouette." },

  { id: 8,  name: "Chemise Oversize Lin",     category: "Vêtements", price: 229, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Blanc", hex:"#FFFFFF"},{name:"Beige", hex:"#E9DFD1"}],
    description: "Chemise oversize en lin léger, à porter ouverte ou nouée. Un basique chic pour toute la saison." },

  { id: 9,  name: "Pantalon Wide Leg",        category: "Vêtements", price: 259, oldPrice: null, badge: "Best Seller",
    images: ["https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Beige", hex:"#E9DFD1"},{name:"Noir", hex:"#241E1C"}],
    description: "Pantalon large taille haute, coupe fluide qui accompagne chaque mouvement avec élégance." },

  { id: 10, name: "Top Femme Dentelle",       category: "Vêtements", price: 179, oldPrice: 210, badge: "",
    images: ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80"],
    sizes: ["XS","S","M"], colors: [{name:"Ivoire", hex:"#F4EEE4"},{name:"Rose", hex:"#E3B6AE"}],
    description: "Top délicat orné de dentelle fine, à porter seul ou superposé pour une touche romantique." },

  { id: 11, name: "Pyjama Short Été",         category: "Pyjamas",   price: 199, oldPrice: null, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Blanc", hex:"#FFFFFF"},{name:"Rose", hex:"#E3B6AE"}],
    description: "Ensemble short et top en coton léger, pensé pour les nuits d'été les plus douces." },

  { id: 12, name: "Pyjama Manches Longues",   category: "Pyjamas",   price: 269, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Gris", hex:"#B8AFA8"},{name:"Bordeaux", hex:"#6E2E33"}],
    description: "Pyjama chaud et cosy à manches longues, idéal pour les soirées fraîches." },

  { id: 13, name: "Ensemble Velours Douceur", category: "Ensembles", price: 319, oldPrice: 360, badge: "Best Seller",
    images: ["https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Bordeaux", hex:"#6E2E33"},{name:"Noir", hex:"#241E1C"}],
    description: "Ensemble en velours moelleux, pour un cocooning haut de gamme dès les premiers frimas." },

  { id: 14, name: "Ensemble Beige Minimal",   category: "Ensembles", price: 279, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80"],
    sizes: ["XS","S","M","L"], colors: [{name:"Beige", hex:"#E9DFD1"}],
    description: "Lignes épurées et matière fluide pour un ensemble minimaliste à vivre au quotidien." },

  { id: 15, name: "Robe Longue Fluide",       category: "Vêtements", price: 369, oldPrice: null, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Champagne", hex:"#E8D8BE"},{name:"Rose", hex:"#E3B6AE"}],
    description: "Robe longue à la coupe fluide, parfaite pour une allure féminine et intemporelle." },

  { id: 16, name: "Kimono Satin Imprimé",     category: "Vêtements", price: 239, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=80"],
    sizes: ["Taille unique"], colors: [{name:"Multicolore", hex:"#D8A7A0"}],
    description: "Kimono léger en satin à motifs délicats, à porter en robe de chambre ou en surchemise." },

  { id: 17, name: "Pyjama Ensemble Duo",      category: "Pyjamas",   price: 279, oldPrice: 320, badge: "Best Seller",
    images: ["https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Ivoire", hex:"#F4EEE4"},{name:"Gris", hex:"#B8AFA8"}],
    description: "Un pyjama complet en matière douce, coupe confortable pour toutes les morphologies." },

  { id: 18, name: "Top Femme Basique",        category: "Vêtements", price: 129, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=80"],
    sizes: ["XS","S","M","L","XL"], colors: [{name:"Blanc", hex:"#FFFFFF"},{name:"Noir", hex:"#241E1C"},{name:"Beige", hex:"#E9DFD1"}],
    description: "Le top essentiel de votre garde-robe, coupe ajustée en coton extensible." },

  { id: 19, name: "Ensemble Soie Prestige",   category: "Ensembles", price: 399, oldPrice: 450, badge: "Nouveau",
    images: ["https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L"], colors: [{name:"Ivoire", hex:"#F4EEE4"},{name:"Rose poudré", hex:"#F1DCD6"}],
    description: "Notre ensemble le plus raffiné, en soie premium, pour une expérience nuit d'exception." },

  { id: 20, name: "Pantalon Homewear Doux",   category: "Vêtements", price: 189, oldPrice: null, badge: "",
    images: ["https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80","https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=700&q=80"],
    sizes: ["S","M","L","XL"], colors: [{name:"Gris", hex:"#B8AFA8"},{name:"Beige", hex:"#E9DFD1"}],
    description: "Pantalon souple en jersey doux, taille élastique, pour un confort absolu à la maison." }
];

/* =====================================================
   ÉTAT DE L'APPLICATION
===================================================== */
let cart = JSON.parse(localStorage.getItem("lunae_cart") || "[]");
let activeProduct = null;      // produit affiché dans la modal
let selectedSize = null;
let selectedColor = null;
let selectedQty = 1;
let currentShopCategory = "Tous";
let currentSearchTerm = "";

/* =====================================================
   UTILITAIRES
===================================================== */
function formatPrice(n){ return `${n} ${STORE.currency}`; }

function buildWhatsappLink(message){
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function showToast(text){
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
}

function saveCart(){
  localStorage.setItem("lunae_cart", JSON.stringify(cart));
  updateCartUI();
}

/* =====================================================
   CARTES PRODUIT (génération HTML)
===================================================== */
function createProductCard(product){
  const card = document.createElement("div");
  card.className = "product-card reveal";

  const badgeHTML = product.badge
    ? `<span class="badge ${product.badge === 'Best Seller' ? 'bestseller' : ''}">${product.badge}</span>`
    : "";

  card.innerHTML = `
    <div class="product-image" data-open-product="${product.id}">
      ${badgeHTML}
      <img src="${product.images[0]}" alt="${product.name}" loading="lazy">
      <button class="cart-quick-btn" data-quick-add="${product.id}" aria-label="Voir le produit">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4h2l2.4 12.4a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 8H6"/><circle cx="10" cy="21" r="1.2"/><circle cx="17" cy="21" r="1.2"/></svg>
      </button>
    </div>
    <div class="product-info">
      <p class="product-cat">${product.category}</p>
      <p class="product-name" data-open-product="${product.id}">${product.name}</p>
      <div class="product-price-row">
        <span class="price">${formatPrice(product.price)}</span>
        ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ""}
      </div>
      <button class="product-view-btn" data-open-product="${product.id}">Voir le produit</button>
    </div>
  `;
  return card;
}

function renderGrid(container, products){
  container.innerHTML = "";
  if (products.length === 0){
    return false;
  }
  const frag = document.createDocumentFragment();
  products.forEach(p => frag.appendChild(createProductCard(p)));
  container.appendChild(frag);
  observeReveals(container);
  return true;
}

/* =====================================================
   SECTIONS ACCUEIL : NOUVEAUTÉS / BEST SELLERS
===================================================== */
function renderHomeSections(){
  const newArrivals = PRODUCTS.filter(p => p.badge === "Nouveau").slice(0, 8);
  const bestSellers = PRODUCTS.filter(p => p.badge === "Best Seller").slice(0, 8);
  renderGrid(document.getElementById("newArrivalsGrid"), newArrivals.length ? newArrivals : PRODUCTS.slice(0,4));
  renderGrid(document.getElementById("bestSellersGrid"), bestSellers.length ? bestSellers : PRODUCTS.slice(4,8));
}

/* =====================================================
   BOUTIQUE : FILTRES / RECHERCHE / TRI
===================================================== */
function getFilteredShopProducts(){
  const maxPrice = Number(document.getElementById("priceRange").value);
  const sortMode = document.getElementById("sortSelect").value;

  let list = PRODUCTS.filter(p => {
    const matchesCategory = currentShopCategory === "Tous" || p.category === currentShopCategory;
    const matchesPrice = p.price <= maxPrice;
    const matchesSearch = p.name.toLowerCase().includes(currentSearchTerm.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  if (sortMode === "price-asc") list = list.sort((a,b) => a.price - b.price);
  if (sortMode === "price-desc") list = list.sort((a,b) => b.price - a.price);
  if (sortMode === "newest") list = list.filter(p => p.badge === "Nouveau").concat(list.filter(p => p.badge !== "Nouveau"));

  return list;
}

function renderShop(){
  const list = getFilteredShopProducts();
  const grid = document.getElementById("shopGrid");
  const noResults = document.getElementById("noResults");
  const hasResults = renderGrid(grid, list);
  noResults.hidden = hasResults;
}

/* =====================================================
   REVEAL AU SCROLL (IntersectionObserver)
===================================================== */
let revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("in-view");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals(scope){
  scope.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

/* =====================================================
   FICHE PRODUIT / MODAL
===================================================== */
function openProductModal(id){
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  activeProduct = product;
  selectedSize = null;
  selectedColor = null;
  selectedQty = 1;

  document.getElementById("modalBadge").textContent = product.badge || "";
  document.getElementById("modalBadge").style.display = product.badge ? "inline-block" : "none";
  document.getElementById("modalMainImg").src = product.images[0];
  document.getElementById("modalMainImg").alt = product.name;
  document.getElementById("modalCategory").textContent = product.category;
  document.getElementById("modalProductName").textContent = product.name;
  document.getElementById("modalPrice").textContent = formatPrice(product.price);
  document.getElementById("modalOldPrice").textContent = product.oldPrice ? formatPrice(product.oldPrice) : "";
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("qtyValue").textContent = "1";
  document.getElementById("optionWarning").hidden = true;

  // miniatures
  const thumbs = document.getElementById("modalThumbs");
  thumbs.innerHTML = "";
  product.images.forEach((img, i) => {
    const thumb = document.createElement("img");
    thumb.src = img;
    thumb.alt = `${product.name} vue ${i+1}`;
    if (i === 0) thumb.classList.add("active");
    thumb.addEventListener("click", () => {
      document.getElementById("modalMainImg").src = img;
      thumbs.querySelectorAll("img").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    thumbs.appendChild(thumb);
  });

  // tailles
  const sizesEl = document.getElementById("modalSizes");
  sizesEl.innerHTML = "";
  product.sizes.forEach(size => {
    const pill = document.createElement("button");
    pill.className = "option-pill";
    pill.textContent = size;
    pill.addEventListener("click", () => {
      selectedSize = size;
      sizesEl.querySelectorAll(".option-pill").forEach(p => p.classList.remove("selected"));
      pill.classList.add("selected");
      document.getElementById("optionWarning").hidden = true;
    });
    sizesEl.appendChild(pill);
  });

  // couleurs
  const colorsEl = document.getElementById("modalColors");
  colorsEl.innerHTML = "";
  product.colors.forEach(color => {
    const swatch = document.createElement("button");
    swatch.className = "option-swatch";
    swatch.style.background = color.hex;
    swatch.title = color.name;
    swatch.setAttribute("aria-label", color.name);
    swatch.addEventListener("click", () => {
      selectedColor = color.name;
      colorsEl.querySelectorAll(".option-swatch").forEach(s => s.classList.remove("selected"));
      swatch.classList.add("selected");
      document.getElementById("optionWarning").hidden = true;
    });
    colorsEl.appendChild(swatch);
  });

  document.getElementById("productModalOverlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeProductModal(){
  document.getElementById("productModalOverlay").classList.remove("open");
  document.body.style.overflow = "";
}

function validateOptions(){
  if (!selectedSize || !selectedColor){
    document.getElementById("optionWarning").hidden = false;
    return false;
  }
  return true;
}

/* =====================================================
   PANIER
===================================================== */
function addToCart(product, size, color, qty){
  const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);
  if (existing){
    existing.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size, color, qty
    });
  }
  saveCart();
  showToast(`${product.name} ajouté au panier`);
}

function removeFromCart(index){
  cart.splice(index, 1);
  saveCart();
}

function changeQty(index, delta){
  cart[index].qty += delta;
  if (cart[index].qty <= 0){
    cart.splice(index, 1);
  }
  saveCart();
}

function clearCart(){
  cart = [];
  saveCart();
}

function getCartTotal(){
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateCartUI(){
  const body = document.getElementById("cartBody");
  const countEl = document.getElementById("cartCount");
  const totalEl = document.getElementById("cartTotal");
  const totalItems = cart.reduce((sum, i) => sum + i.qty, 0);

  countEl.textContent = totalItems;
  totalEl.textContent = formatPrice(getCartTotal());

  if (cart.length === 0){
    body.innerHTML = `<p class="cart-empty">Votre panier est vide pour le moment.</p>`;
  } else {
    body.innerHTML = "";
    cart.forEach((item, index) => {
      const row = document.createElement("div");
      row.className = "cart-item";
      row.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-meta">${item.size} · ${item.color}</p>
          <div class="cart-item-qty">
            <button data-qty-minus="${index}" aria-label="Diminuer">−</button>
            <span>${item.qty}</span>
            <button data-qty-plus="${index}" aria-label="Augmenter">+</button>
          </div>
        </div>
        <div>
          <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
          <p class="cart-item-remove" data-remove="${index}">Supprimer</p>
        </div>
      `;
      body.appendChild(row);
    });
  }

  // lien whatsapp du panier
  document.getElementById("cartWhatsapp").href = buildCartWhatsappLink();
}

function buildCartWhatsappLink(){
  if (cart.length === 0){
    return buildWhatsappLink(`Bonjour, j'aimerais avoir plus d'informations sur vos produits ${STORE.name}.`);
  }
  let message = "Bonjour, je souhaite commander :\n";
  cart.forEach(item => {
    message += `- ${item.name} — ${item.size} — ${item.color} — x${item.qty} — ${formatPrice(item.price * item.qty)}\n`;
  });
  message += `\nTotal : ${formatPrice(getCartTotal())}`;
  return buildWhatsappLink(message);
}

function buildProductWhatsappLink(product, size, color, qty){
  const message =
`Bonjour, je suis intéressée par :
Produit : ${product.name}
Taille : ${size}
Couleur : ${color}
Quantité : ${qty}
Prix : ${formatPrice(product.price * qty)}
Je souhaite passer commande.`;
  return buildWhatsappLink(message);
}

/* =====================================================
   INITIALISATION / ÉCOUTEURS D'ÉVÉNEMENTS
===================================================== */
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("year").textContent = new Date().getFullYear();

  // liens whatsapp génériques (hero, cta, footer, flottant)
  const genericMessage = `Bonjour, je suis intéressée par les produits ${STORE.name}. Pouvez-vous m'aider ?`;
  const genericLink = buildWhatsappLink(genericMessage);
  ["heroWhatsapp","ctaWhatsapp","footerWhatsapp","footerWhatsappLink","floatingWhatsapp"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.href = genericLink;
  });

  // lien instagram
  document.querySelectorAll('.ig-btn, .footer-social a[aria-label="Instagram"]').forEach(el => {
    el.href = STORE.instagram;
  });

  renderHomeSections();
  renderShop();
  updateCartUI();

  /* ---------- MENU MOBILE ---------- */
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinks = document.getElementById("navLinks");
  const navOverlay = document.getElementById("navOverlay");

  function toggleMenu(open){
    const isOpen = open !== undefined ? open : !navLinks.classList.contains("open");
    navLinks.classList.toggle("open", isOpen);
    navOverlay.classList.toggle("open", isOpen);
    hamburgerBtn.classList.toggle("open", isOpen);
    hamburgerBtn.setAttribute("aria-expanded", isOpen);
  }
  hamburgerBtn.addEventListener("click", () => toggleMenu());
  navOverlay.addEventListener("click", () => toggleMenu(false));
  navLinks.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => toggleMenu(false)));

  /* ---------- RECHERCHE ---------- */
  const searchToggle = document.getElementById("searchToggle");
  const searchBar = document.getElementById("searchBar");
  const searchInput = document.getElementById("searchInput");
  const searchClose = document.getElementById("searchClose");

  searchToggle.addEventListener("click", () => {
    searchBar.classList.toggle("open");
    if (searchBar.classList.contains("open")) searchInput.focus();
  });
  searchClose.addEventListener("click", () => searchBar.classList.remove("open"));
  searchInput.addEventListener("input", (e) => {
    currentSearchTerm = e.target.value;
    document.getElementById("boutique").scrollIntoView({ behavior: "smooth" });
    renderShop();
  });

  /* ---------- FILTRES CATÉGORIE (navbar + footer + catégories accueil) ---------- */
  document.querySelectorAll("[data-filter-cat]").forEach(el => {
    el.addEventListener("click", (e) => {
      const cat = el.getAttribute("data-filter-cat");
      currentShopCategory = cat === "Nouveautés" ? "Tous" : cat;
      document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.classList.toggle("active", chip.dataset.cat === currentShopCategory);
      });
      if (cat === "Nouveautés"){
        document.getElementById("sortSelect").value = "newest";
      }
      renderShop();
    });
  });

  /* ---------- CHIPS DE CATÉGORIE (boutique) ---------- */
  document.getElementById("categoryFilters").addEventListener("click", (e) => {
    const chip = e.target.closest(".filter-chip");
    if (!chip) return;
    currentShopCategory = chip.dataset.cat;
    document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    renderShop();
  });

  /* ---------- TRI & PRIX ---------- */
  document.getElementById("sortSelect").addEventListener("change", renderShop);
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  priceRange.addEventListener("input", () => {
    priceValue.textContent = formatPrice(Number(priceRange.value));
    renderShop();
  });

  /* ---------- OUVERTURE FICHE PRODUIT (clic sur cartes) ---------- */
  document.addEventListener("click", (e) => {
    const opener = e.target.closest("[data-open-product]");
    if (opener){
      openProductModal(Number(opener.dataset.openProduct));
      return;
    }
    const quickAdd = e.target.closest("[data-quick-add]");
    if (quickAdd){
      openProductModal(Number(quickAdd.dataset.quickAdd));
    }
  });

  /* ---------- MODAL PRODUIT : fermeture ---------- */
  document.getElementById("modalClose").addEventListener("click", closeProductModal);
  document.getElementById("productModalOverlay").addEventListener("click", (e) => {
    if (e.target.id === "productModalOverlay") closeProductModal();
  });

  /* ---------- MODAL PRODUIT : quantité ---------- */
  document.getElementById("qtyMinus").addEventListener("click", () => {
    selectedQty = Math.max(1, selectedQty - 1);
    document.getElementById("qtyValue").textContent = selectedQty;
  });
  document.getElementById("qtyPlus").addEventListener("click", () => {
    selectedQty += 1;
    document.getElementById("qtyValue").textContent = selectedQty;
  });

  /* ---------- MODAL PRODUIT : ajout panier ---------- */
  document.getElementById("modalAddToCart").addEventListener("click", () => {
    if (!validateOptions()) return;
    addToCart(activeProduct, selectedSize, selectedColor, selectedQty);
    closeProductModal();
  });

  /* ---------- MODAL PRODUIT : commande whatsapp ---------- */
  const modalWhatsappBtn = document.getElementById("modalWhatsapp");
  modalWhatsappBtn.addEventListener("click", (e) => {
    if (!validateOptions()){
      e.preventDefault();
      return;
    }
    modalWhatsappBtn.href = buildProductWhatsappLink(activeProduct, selectedSize, selectedColor, selectedQty);
  });

  /* ---------- PANIER : ouverture / fermeture ---------- */
  const cartDrawer = document.getElementById("cartDrawer");
  const cartOverlay = document.getElementById("cartOverlay");

  function toggleCart(open){
    cartDrawer.classList.toggle("open", open);
    cartOverlay.classList.toggle("open", open);
    cartDrawer.setAttribute("aria-hidden", !open);
  }
  document.getElementById("cartToggle").addEventListener("click", () => toggleCart(true));
  document.getElementById("cartClose").addEventListener("click", () => toggleCart(false));
  cartOverlay.addEventListener("click", () => toggleCart(false));

  /* ---------- PANIER : actions sur les articles ---------- */
  document.getElementById("cartBody").addEventListener("click", (e) => {
    const minus = e.target.closest("[data-qty-minus]");
    const plus = e.target.closest("[data-qty-plus]");
    const remove = e.target.closest("[data-remove]");
    if (minus) changeQty(Number(minus.dataset.qtyMinus), -1);
    if (plus) changeQty(Number(plus.dataset.qtyPlus), 1);
    if (remove) removeFromCart(Number(remove.dataset.remove));
  });

  document.getElementById("cartClearBtn").addEventListener("click", clearCart);

  document.getElementById("cartWhatsapp").addEventListener("click", (e) => {
    if (cart.length === 0){
      e.preventDefault();
      showToast("Votre panier est vide");
    }
  });

  /* ---------- FERMETURE AU CLAVIER (Échap) ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      closeProductModal();
      toggleCart(false);
      toggleMenu(false);
    }
  });

  /* ---------- NAVBAR : ombre au scroll ---------- */
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.style.boxShadow = window.scrollY > 10 ? "0 4px 20px rgba(36,30,28,.06)" : "none";
  }, { passive: true });

});
