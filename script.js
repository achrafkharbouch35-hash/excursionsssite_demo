/* =========================================================
   NOMADIA TRAVEL — script.js
   ========================================================= */

/* ---------- CONFIG ---------- */
const CONFIG = {
    whatsapp: "212600000000",
    instagram: "https://instagram.com/nomadia.travel"
};

/* ---------- DATA ---------- */
const TOURS = [
  {
    id: "agafay",
    name: "Désert d'Agafay",
    destination: "Agafay, près de Marrakech",
    category: "desert",
    duration: "1 journée",
    price: 399,
    rating: 4.8,
    badge: "BEST SELLER",
    image: "desert agafay.jpg",
    description: "À seulement 40 minutes de Marrakech, le désert d'Agafay offre des paysages lunaires de collines rocheuses. Une escapade parfaite pour ressentir l'immensité du désert sans le long trajet vers le Sahara.",
    program: [
      { time: "08:00", label: "Départ de votre hôtel à Marrakech" },
      { time: "09:00", label: "Arrivée au camp d'Agafay" },
      { time: "10:00", label: "Balade en dromadaire dans les dunes" },
      { time: "13:00", label: "Déjeuner traditionnel sous tente berbère" },
      { time: "16:00", label: "Retour vers Marrakech" }
    ],
    included: ["Transport aller-retour climatisé", "Balade en dromadaire", "Déjeuner traditionnel", "Guide francophone"],
    excluded: ["Boissons non incluses", "Pourboires", "Activités optionnelles"]
  },
  {
    id: "chefchaouen",
    name: "Chefchaouen",
    destination: "La perle bleue du Rif",
    category: "montagne",
    duration: "1 journée",
    price: 349,
    rating: 4.9,
    badge: "BEST SELLER",
    image: "chafchaoun.jpg",
    description: "Perdez-vous dans les ruelles bleutées de Chefchaouen, nichée dans les montagnes du Rif. Une journée dédiée à la photographie, à l'artisanat local et à l'atmosphère paisible de la médina.",
    program: [
      { time: "06:30", label: "Départ matinal" },
      { time: "10:30", label: "Arrivée à Chefchaouen" },
      { time: "11:00", label: "Visite guidée de la médina bleue" },
      { time: "13:30", label: "Déjeuner libre" },
      { time: "17:00", label: "Retour" }
    ],
    included: ["Transport confortable", "Guide local", "Temps libre dans la médina"],
    excluded: ["Repas", "Entrées éventuelles aux monuments"]
  },
  {
    id: "marrakech",
    name: "Marrakech",
    destination: "La ville rouge",
    category: "villes",
    duration: "Excursion journée",
    price: 299,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "marrakech.jpg",
    description: "Explorez la place Jemaa el-Fna, les souks colorés, les jardins Majorelle et les palais historiques au cœur de Marrakech, ville impériale pleine de vie.",
    program: [
      { time: "09:00", label: "Rendez-vous au centre-ville" },
      { time: "09:30", label: "Visite de la Koutoubia et de la médina" },
      { time: "12:00", label: "Balade dans les souks" },
      { time: "14:00", label: "Déjeuner" },
      { time: "17:00", label: "Jardins Majorelle" }
    ],
    included: ["Guide francophone", "Entrées aux sites principaux"],
    excluded: ["Déjeuner", "Transport depuis votre riad"]
  },
  {
    id: "merzouga",
    name: "Merzouga & Sahara",
    destination: "Dunes de l'Erg Chebbi",
    category: "desert",
    duration: "3 jours",
    price: 1490,
    rating: 5.0,
    badge: "BEST SELLER",
    image: "marzouga.jpg",
    description: "Traversez l'Atlas, les gorges du Todra et les vallées du sud pour rejoindre les majestueuses dunes de Merzouga. Une nuit inoubliable sous les étoiles du Sahara.",
    program: [
      { time: "Jour 1", label: "Marrakech → Vallée du Dadès" },
      { time: "Jour 2", label: "Gorges du Todra → Merzouga, coucher de soleil en dromadaire" },
      { time: "Jour 3", label: "Lever de soleil sur les dunes → retour" }
    ],
    included: ["2 nuits en hébergement (hôtel + bivouac)", "Tous les transports", "Balade en dromadaire", "Petits-déjeuners et dîners"],
    excluded: ["Déjeuners", "Boissons", "Dépenses personnelles"]
  },
  {
    id: "essaouira",
    name: "Essaouira",
    destination: "La cité des vents",
    category: "plages",
    duration: "1 journée",
    price: 399,
    rating: 4.6,
    badge: "NOUVEAU",
    image: "essaouira.jpg",
    description: "Découvrez la médina fortifiée d'Essaouira, son port de pêcheurs animé et ses plages venteuses, prisées des amateurs de surf et de kitesurf.",
    program: [
      { time: "08:00", label: "Départ" },
      { time: "10:30", label: "Visite de la médina et des remparts" },
      { time: "13:00", label: "Déjeuner de poissons au port" },
      { time: "15:00", label: "Temps libre à la plage" },
      { time: "18:00", label: "Retour" }
    ],
    included: ["Transport aller-retour", "Guide local"],
    excluded: ["Déjeuner", "Activités nautiques"]
  },
  {
    id: "ouzoud",
    name: "Ouzoud",
    destination: "Cascades d'Ouzoud",
    category: "montagne",
    duration: "1 journée",
    price: 349,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "ouzoud.jpg",
    description: "Randonnez jusqu'au pied des cascades d'Ouzoud, les plus hautes du Maroc, et observez les singes magots dans leur habitat naturel.",
    program: [
      { time: "08:30", label: "Départ" },
      { time: "10:30", label: "Arrivée et randonnée vers les cascades" },
      { time: "12:30", label: "Balade en barque (optionnelle)" },
      { time: "14:00", label: "Déjeuner avec vue sur les chutes" },
      { time: "17:30", label: "Retour" }
    ],
    included: ["Transport", "Guide accompagnateur"],
    excluded: ["Déjeuner", "Balade en barque"]
  },
  {
    id: "atlas",
    name: "Atlas Mountains",
    destination: "Vallée de l'Ourika",
    category: "aventure",
    duration: "1 journée",
    price: 449,
    rating: 4.8,
    badge: "BEST SELLER",
    image: "atlas mouantains.jpg",
    description: "Randonnée dans les villages berbères de la vallée de l'Ourika, au cœur du Haut Atlas, avec ses cascades, ses terrasses cultivées et son air pur.",
    program: [
      { time: "08:00", label: "Départ de Marrakech" },
      { time: "09:30", label: "Arrivée et début de la randonnée" },
      { time: "12:30", label: "Déjeuner chez l'habitant" },
      { time: "15:00", label: "Visite d'un village berbère" },
      { time: "18:00", label: "Retour" }
    ],
    included: ["Transport 4x4", "Guide de montagne", "Déjeuner berbère"],
    excluded: ["Boissons", "Pourboires"]
  },
  {
    id: "fes-meknes",
    name: "Fès & Meknès",
    destination: "Villes impériales",
    category: "culture",
    duration: "1 journée",
    price: 299,
    rating: 4.7,
    badge: "NOUVEAU",
    image: "fesmeknes.jpg",
    description: "Plongez dans l'histoire du Maroc à travers les médinas classées à l'UNESCO de Fès et Meknès, entre tanneries millénaires et monuments impériaux.",
    program: [
      { time: "07:00", label: "Départ" },
      { time: "09:30", label: "Visite de Meknès et Volubilis" },
      { time: "13:00", label: "Déjeuner" },
      { time: "15:00", label: "Médina de Fès et tanneries" },
      { time: "19:00", label: "Retour" }
    ],
    included: ["Transport", "Guide francophone", "Entrées à Volubilis"],
    excluded: ["Déjeuner", "Pourboires"]
  }
];

const DESTINATIONS = [
  { name: "Marrakech", count: 6, image: "marrakech.jpg" },
  { name: "Fès", count: 4, image: "fesmeknes.jpg" },
  { name: "Chefchaouen", count: 3, image: "chafchaoun.jpg" },
  { name: "Merzouga", count: 5, image: "marzouga.jpg" },
  { name: "Agafay", count: 3, image: "desert agafay.jpg" },
  { name: "Essaouira", count: 4, image: "essaouira.jpg" }
];

const CIRCUITS = [
  { name: "Maroc Essentiel", days: "7 jours", route: "Marrakech → Aït Ben Haddou → Merzouga → Fès", price: 3490 },
  { name: "Grande Aventure Sahara", days: "5 jours", route: "Marrakech → Ouarzazate → Merzouga", price: 2490 },
  { name: "Côte Atlantique", days: "4 jours", route: "Casablanca → Rabat → Essaouira", price: 1990 }
];

const TESTIMONIALS = [
  {
    name: "Claire Dubois",
    country: "France",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Une expérience incroyable ! L'organisation était parfaite et notre guide connaissait parfaitement la région."
  },
  {
    name: "Marco Rossi",
    country: "Italie",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "Le désert de Merzouga restera gravé dans ma mémoire. Une équipe attentionnée du début à la fin du séjour."
  },
  {
    name: "Sarah Johnson",
    country: "Royaume-Uni",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    text: "Réservation simple via WhatsApp, transport confortable et guides passionnants. Je recommande vivement NOMADIA."
  }
];

const INSTAGRAM_IMAGES = [
  "https://images.unsplash.com/photo-1489493887464-892be6d1daae?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509316785289-025f5b846b35?q=80&w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=500&auto=format&fit=crop",
];

/* ---------- STATE ---------- */
let currentFilter = "all";
let currentSort = "recommended";
let favorites = JSON.parse(localStorage.getItem("nomadia_favorites") || "[]");
let activeTour = null;
let bookingQty = 2;

/* ---------- HELPERS ---------- */
function formatPrice(p){ return p.toLocaleString("fr-FR") + " DH"; }

function buildWhatsappLink(message){
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function defaultWhatsappMessage(){
  return "Bonjour NOMADIA TRAVEL 👋\n\nJe souhaite avoir plus d'informations sur vos excursions.\n\nMerci.";
}

function tourWhatsappMessage(tour){
  return `Bonjour NOMADIA TRAVEL 👋\n\nJe souhaite réserver :\n\nExcursion : ${tour.name}\nDate : \nNombre de personnes : \n\nMerci.`;
}

/* ---------- INIT WHATSAPP LINKS ---------- */
function initWhatsappLinks(){
  const links = [
    "navWhatsapp","mobileWhatsapp","heroWhatsapp","contactWhatsapp","footerWhatsapp","floatingWhatsapp"
  ];
  links.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.href = buildWhatsappLink(defaultWhatsappMessage());
  });
}

/* ---------- NAVBAR SCROLL STATE ---------- */
function initNavbarScroll(){
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 30) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });
}

/* ---------- MOBILE MENU ---------- */
function initMobileMenu(){
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
  mobileMenu.querySelectorAll(".mobile-link").forEach(link=>{
    link.addEventListener("click", ()=>{
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

/* ---------- SEARCH OVERLAY ---------- */
function initSearchOverlay(){
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("liveSearchInput");
  const resultsWrap = document.getElementById("searchResults");

  function open(){
    overlay.classList.add("open");
    setTimeout(()=>input.focus(), 350);
    renderSearchResults("");
  }
  function close(){
    overlay.classList.remove("open");
    input.value = "";
  }

  document.getElementById("searchToggle").addEventListener("click", open);
  document.getElementById("searchClose").addEventListener("click", close);
  overlay.addEventListener("click", (e)=>{ if(e.target === overlay) close(); });
  document.addEventListener("keydown", (e)=>{ if(e.key === "Escape") close(); });

  input.addEventListener("input", ()=> renderSearchResults(input.value));

  function renderSearchResults(query){
    const q = query.trim().toLowerCase();
    const matches = TOURS.filter(t =>
      t.name.toLowerCase().includes(q) || t.destination.toLowerCase().includes(q)
    );
    resultsWrap.innerHTML = matches.map(t => `
      <a class="search-result-item" href="#excursions" data-id="${t.id}">
        <span>${t.name} — ${t.destination}</span>
        <span>${formatPrice(t.price)}</span>
      </a>
    `).join("") || `<p style="color:rgba(248,243,233,0.5);">Aucun résultat pour "${query}"</p>`;

    resultsWrap.querySelectorAll(".search-result-item").forEach(item=>{
      item.addEventListener("click", ()=>{
        overlay.classList.remove("open");
        setTimeout(()=> openTourModal(item.dataset.id), 300);
      });
    });
  }
}

/* ---------- HERO SEARCH FORM ---------- */
function initHeroSearch(){
  const form = document.getElementById("heroSearchForm");
  form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const where = document.getElementById("hsWhere").value.trim();
    document.getElementById("excursions").scrollIntoView({behavior:"smooth"});
    if(where){
      document.getElementById("liveSearchInput").value = where;
    }
    // filter grid by matching text too
    window.__heroSearchTerm = where.toLowerCase();
    renderTours();
  });
}

/* ---------- TOURS RENDER ---------- */
function getFilteredSortedTours(){
  let list = TOURS.slice();

  if(currentFilter !== "all"){
    list = list.filter(t => t.category === currentFilter);
  }

  if(window.__heroSearchTerm){
    const term = window.__heroSearchTerm;
    list = list.filter(t => t.name.toLowerCase().includes(term) || t.destination.toLowerCase().includes(term));
  }

  switch(currentSort){
    case "price-asc": list.sort((a,b)=>a.price-b.price); break;
    case "price-desc": list.sort((a,b)=>b.price-a.price); break;
    case "rating": list.sort((a,b)=>b.rating-a.rating); break;
    default: break;
  }
  return list;
}

function renderTours(){
  const grid = document.getElementById("toursGrid");
  const noResults = document.getElementById("noResults");
  const list = getFilteredSortedTours();

  if(list.length === 0){
    grid.innerHTML = "";
    noResults.hidden = false;
    return;
  }
  noResults.hidden = true;

  grid.innerHTML = list.map(t => `
    <div class="tour-card reveal in-view" data-id="${t.id}">
      <div class="tour-media">
        <img src="${t.image}" alt="${t.name}" loading="lazy">
        <span class="tour-badge ${t.badge === 'NOUVEAU' ? 'new' : ''}">${t.badge}</span>
        <button class="tour-fav-btn ${favorites.includes(t.id) ? 'active' : ''}" data-id="${t.id}" aria-label="Ajouter aux favoris">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke-width="1.8"><path d="M12 20.5s-7.5-4.6-10-9.2C0.3 8 1.7 4.3 5.2 3.6c2.1-0.4 4.1 0.6 5.2 2.3c1.1-1.7 3.1-2.7 5.2-2.3c3.5 0.7 4.9 4.4 3.2 7.7c-2.5 4.6-10 9.2-10 9.2z"/></svg>
        </button>
      </div>
      <div class="tour-body">
        <div class="tour-top-row">
          <h3 class="tour-name">${t.name}</h3>
          <span class="tour-rating">★ ${t.rating.toFixed(1)}</span>
        </div>
        <p class="tour-meta">${t.destination} · ${t.duration}</p>
        <div class="tour-bottom-row">
          <p class="tour-price"><span>Dès</span><br>${formatPrice(t.price)}</p>
          <div class="tour-actions">
            <button class="btn btn-primary btn-details" data-id="${t.id}">Détails</button>
            <a class="icon-btn tour-wa-btn" data-id="${t.id}" target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.45 9.9-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m0 1.67a8.2 8.2 0 0 1 5.83 2.42a8.2 8.2 0 0 1 2.41 5.82c0 4.55-3.7 8.24-8.25 8.24c-1.44 0-2.85-.37-4.09-1.08l-.29-.17l-3.11.82l.83-3.03l-.19-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.55 3.7-8.24 8.24-8.24z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".btn-details").forEach(btn=>{
    btn.addEventListener("click", ()=> openTourModal(btn.dataset.id));
  });
  grid.querySelectorAll(".tour-fav-btn").forEach(btn=>{
    btn.addEventListener("click", ()=> toggleFavorite(btn.dataset.id));
  });
  grid.querySelectorAll(".tour-wa-btn").forEach(btn=>{
    const tour = TOURS.find(t=>t.id === btn.dataset.id);
    btn.href = buildWhatsappLink(tourWhatsappMessage(tour));
  });
}

/* ---------- FILTERS + SORT ---------- */
function initFiltersAndSort(){
  document.getElementById("filterTabs").addEventListener("click",(e)=>{
    const btn = e.target.closest(".filter-tab");
    if(!btn) return;
    document.querySelectorAll(".filter-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    renderTours();
  });

  document.getElementById("sortSelect").addEventListener("change",(e)=>{
    currentSort = e.target.value;
    renderTours();
  });
}

/* ---------- FAVORITES ---------- */
function toggleFavorite(id){
  if(favorites.includes(id)){
    favorites = favorites.filter(f=>f!==id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("nomadia_favorites", JSON.stringify(favorites));
  updateFavCount();
  renderTours();
  renderFavDrawer();
}

function updateFavCount(){
  document.getElementById("favCount").textContent = favorites.length;
}

function renderFavDrawer(){
  const body = document.getElementById("favDrawerBody");
  if(favorites.length === 0){
    body.innerHTML = `<p class="fav-empty">Vous n'avez pas encore d'excursion favorite.<br>Cliquez sur le cœur d'une carte pour l'ajouter ici.</p>`;
    return;
  }
  const items = TOURS.filter(t => favorites.includes(t.id));
  body.innerHTML = items.map(t=>`
    <div class="fav-item">
      <img src="${t.image}" alt="${t.name}">
      <div class="fav-item-info">
        <h4>${t.name}</h4>
        <p>${formatPrice(t.price)} · ${t.duration}</p>
      </div>
      <button class="fav-remove" data-id="${t.id}" aria-label="Retirer">&times;</button>
    </div>
  `).join("");

  body.querySelectorAll(".fav-remove").forEach(btn=>{
    btn.addEventListener("click", ()=> toggleFavorite(btn.dataset.id));
  });
}

function initFavDrawer(){
  const drawer = document.getElementById("favDrawer");
  const backdrop = document.getElementById("drawerBackdrop");
  function open(){
    renderFavDrawer();
    drawer.classList.add("open");
    backdrop.classList.add("open");
  }
  function close(){
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
  }
  document.getElementById("favToggle").addEventListener("click", open);
  document.getElementById("favClose").addEventListener("click", close);
  backdrop.addEventListener("click", close);
}

/* ---------- DESTINATIONS RENDER ---------- */
function renderDestinations(){
  const grid = document.getElementById("destinationsGrid");
  grid.innerHTML = DESTINATIONS.map(d=>`
    <div class="destination-card reveal" data-name="${d.name}">
      <img src="${d.image}" alt="${d.name}" loading="lazy">
      <div class="destination-info">
        <h3>${d.name}</h3>
        <p>${d.count} expériences disponibles</p>
        <span class="destination-explore">Explorer</span>
      </div>
    </div>
  `).join("");

  grid.querySelectorAll(".destination-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      window.__heroSearchTerm = card.dataset.name.toLowerCase();
      currentFilter = "all";
      document.querySelectorAll(".filter-tab").forEach(b=>b.classList.toggle("active", b.dataset.filter==="all"));
      renderTours();
      document.getElementById("excursions").scrollIntoView({behavior:"smooth"});
    });
  });
}

/* ---------- CIRCUITS RENDER ---------- */
function renderCircuits(){
  const grid = document.getElementById("circuitsGrid");
  grid.innerHTML = CIRCUITS.map(c=>`
    <div class="circuit-card reveal">
      <span class="circuit-days">${c.days}</span>
      <h3 class="circuit-name">${c.name}</h3>
      <p class="circuit-route">${c.route}</p>
      <p class="circuit-price"><span>À partir de</span><br>${formatPrice(c.price)}</p>
      <button class="btn btn-outline circuit-btn" data-name="${c.name}">Voir le circuit</button>
    </div>
  `).join("");

  grid.querySelectorAll(".circuit-btn").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const msg = `Bonjour NOMADIA TRAVEL 👋\n\nJe suis intéressé(e) par le circuit :\n${btn.dataset.name}\n\nPouvez-vous me donner plus de détails ?\n\nMerci.`;
      window.open(buildWhatsappLink(msg), "_blank");
    });
  });
}

/* ---------- INSTAGRAM RENDER ---------- */
function renderInstagram(){
  const grid = document.getElementById("instagramGrid");
  grid.innerHTML = INSTAGRAM_IMAGES.map(src=>`
    <a class="insta-item" href="${CONFIG.instagram}" target="_blank" rel="noopener">
      <img src="${src}" alt="Photo de voyage NOMADIA" loading="lazy">
      <span class="insta-icon">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2c2.7 0 3.05.01 4.12.06c1.06.05 1.79.22 2.43.47c.66.26 1.21.6 1.76 1.15c.55.55.9 1.1 1.15 1.76c.25.64.42 1.37.47 2.43c.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.76a4.9 4.9 0 0 1-1.76 1.15c-.64.25-1.37.42-2.43.47c-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.76-1.15a4.9 4.9 0 0 1-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43c.26-.66.6-1.21 1.15-1.76a4.9 4.9 0 0 1 1.76-1.15c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2m0 1.8c-2.65 0-2.97.01-4.02.06c-.97.04-1.5.2-1.85.34c-.47.18-.8.4-1.15.75s-.57.68-.75 1.15c-.14.35-.3.88-.34 1.85c-.05 1.05-.06 1.37-.06 4.02s.01 2.97.06 4.02c.04.97.2 1.5.34 1.85c.18.47.4.8.75 1.15s.68.57 1.15.75c.35.14.88.3 1.85.34c1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.97-.04 1.5-.2 1.85-.34c.47-.18.8-.4 1.15-.75s.57-.68.75-1.15c.14-.35.3-.88.34-1.85c.05-1.05.06-1.37.06-4.02s-.01-2.97-.06-4.02c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 0 0-.75-1.15a3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.85-.34C14.97 3.81 14.65 3.8 12 3.8m0 3.06a5.14 5.14 0 1 1 0 10.28a5.14 5.14 0 0 1 0-10.28m0 1.8a3.34 3.34 0 1 0 0 6.68a3.34 3.34 0 0 0 0-6.68m5.34-1.96a1.2 1.2 0 1 1-2.4 0a1.2 1.2 0 0 1 2.4 0"/></svg>
      </span>
    </a>
  `).join("");
}

/* ---------- TESTIMONIALS SLIDER ---------- */
let testimonialIndex = 0;
let testimonialTimer = null;

function renderTestimonials(){
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");

  track.innerHTML = TESTIMONIALS.map(t=>`
    <div class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p class="testimonial-quote">"${t.text}"</p>
      <img class="testimonial-avatar" src="${t.avatar}" alt="${t.name}">
      <p class="testimonial-name">${t.name}</p>
      <p class="testimonial-country">${t.country}</p>
    </div>
  `).join("");

  dots.innerHTML = TESTIMONIALS.map((_,i)=>`<button class="t-dot ${i===0?'active':''}" data-index="${i}"></button>`).join("");

  dots.querySelectorAll(".t-dot").forEach(dot=>{
    dot.addEventListener("click", ()=>{
      testimonialIndex = parseInt(dot.dataset.index);
      updateTestimonialSlide();
      resetTestimonialTimer();
    });
  });

  startTestimonialAutoplay();
}

function updateTestimonialSlide(){
  const track = document.getElementById("testimonialTrack");
  track.style.transform = `translateX(-${testimonialIndex * 100}%)`;
  document.querySelectorAll(".t-dot").forEach((d,i)=> d.classList.toggle("active", i===testimonialIndex));
}

function startTestimonialAutoplay(){
  testimonialTimer = setInterval(()=>{
    testimonialIndex = (testimonialIndex + 1) % TESTIMONIALS.length;
    updateTestimonialSlide();
  }, 5500);
}
function resetTestimonialTimer(){
  clearInterval(testimonialTimer);
  startTestimonialAutoplay();
}

/* ---------- FAQ ACCORDION ---------- */
function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item=>{
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    question.addEventListener("click", ()=>{
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(other=>{
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

/* ---------- TOUR DETAILS MODAL ---------- */
function openTourModal(id){
  const tour = TOURS.find(t=>t.id===id);
  if(!tour) return;
  activeTour = tour;
  bookingQty = 2;

  document.getElementById("tmImage").src = tour.image;
  document.getElementById("tmImage").alt = tour.name;
  document.getElementById("tmBadge").textContent = tour.badge;
  document.getElementById("tmBadge").className = "tour-badge " + (tour.badge === "NOUVEAU" ? "new" : "");
  document.getElementById("tmDestination").textContent = tour.destination;
  document.getElementById("tmTitle").textContent = tour.name;
  document.getElementById("tmDuration").textContent = tour.duration;
  document.getElementById("tmRating").textContent = "★ " + tour.rating.toFixed(1);
  document.getElementById("tmDesc").textContent = tour.description;
  document.getElementById("tmPrice").textContent = formatPrice(tour.price);
  document.getElementById("tmQtyValue").textContent = bookingQty;

  document.getElementById("tmProgram").innerHTML = tour.program.map(p=>`
    <li><span class="time">${p.time}</span><span>${p.label}</span></li>
  `).join("");
  document.getElementById("tmIncluded").innerHTML = tour.included.map(i=>`<li>${i}</li>`).join("");
  document.getElementById("tmExcluded").innerHTML = tour.excluded.map(i=>`<li>${i}</li>`).join("");

  document.getElementById("tmWhatsapp").href = buildWhatsappLink(tourWhatsappMessage(tour));

  document.getElementById("tourModalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeTourModal(){
  document.getElementById("tourModalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

function initTourModal(){
  document.getElementById("tourModalClose").addEventListener("click", closeTourModal);
  document.getElementById("tourModalBackdrop").addEventListener("click",(e)=>{
    if(e.target.id === "tourModalBackdrop") closeTourModal();
  });

  document.getElementById("tmQtyMinus").addEventListener("click", ()=>{
    if(bookingQty > 1) bookingQty--;
    document.getElementById("tmQtyValue").textContent = bookingQty;
  });
  document.getElementById("tmQtyPlus").addEventListener("click", ()=>{
    bookingQty++;
    document.getElementById("tmQtyValue").textContent = bookingQty;
  });

  document.getElementById("tmBookBtn").addEventListener("click", ()=>{
    closeTourModal();
    openBookingModal(activeTour);
  });
}

/* ---------- BOOKING MODAL ---------- */
function openBookingModal(tour){
  document.getElementById("bookingModalBackdrop").classList.add("open");
  document.body.style.overflow = "hidden";
  document.getElementById("bookingFormWrap").hidden = false;
  document.getElementById("bookingConfirmation").hidden = true;

  const tourName = tour ? tour.name : "";
  document.getElementById("bookingTourName").textContent = tourName ? `Pour l'excursion : ${tourName}` : "Demande générale";
  document.getElementById("bookingTourInput").value = tourName;
  document.querySelector('#bookingForm [name="travelers"]').value = bookingQty || 2;
}

function closeBookingModal(){
  document.getElementById("bookingModalBackdrop").classList.remove("open");
  document.body.style.overflow = "";
}

function initBookingModal(){
  document.getElementById("bookingModalClose").addEventListener("click", closeBookingModal);
  document.getElementById("bookingModalBackdrop").addEventListener("click",(e)=>{
    if(e.target.id === "bookingModalBackdrop") closeBookingModal();
  });
  document.getElementById("confirmCloseBtn").addEventListener("click", closeBookingModal);

  document.getElementById("bookingForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("bookingFormWrap").hidden = true;
    document.getElementById("bookingConfirmation").hidden = false;
    e.target.reset();
  });
}

/* ---------- CONTACT FORM ---------- */
function initContactForm(){
  const form = document.getElementById("contactForm");
  form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const btn = form.querySelector("button");
    const originalText = btn.textContent;
    btn.textContent = "Message envoyé ✓";
    btn.disabled = true;
    form.reset();
    setTimeout(()=>{
      btn.textContent = originalText;
      btn.disabled = false;
    }, 2600);
  });
}

/* ---------- SCROLL REVEAL ---------- */
function initScrollReveal(){
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el=> observer.observe(el));
}

/* ---------- ANIMATED COUNTERS ---------- */
function initCounters(){
  const nums = document.querySelectorAll(".stat-num");
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  nums.forEach(el=>observer.observe(el));
}

function animateCounter(el){
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimal || "0");
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  function step(now){
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = value.toFixed(decimals) + suffix;
    if(progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toFixed(decimals) + suffix;
  }
  requestAnimationFrame(step);
}

/* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
function initActiveNavLink(){
  const sections = ["accueil","excursions","destinations","circuits","apropos","contact"]
    .map(id=>document.getElementById(id)).filter(Boolean);
  const links = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", ()=>{
    let currentId = sections[0].id;
    sections.forEach(sec=>{
      if(window.scrollY + 140 >= sec.offsetTop) currentId = sec.id;
    });
    links.forEach(link=>{
      link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
  });
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", ()=>{
  initWhatsappLinks();
  initNavbarScroll();
  initMobileMenu();
  initSearchOverlay();
  initHeroSearch();
  initFiltersAndSort();
  renderTours();
  updateFavCount();
  initFavDrawer();
  renderDestinations();
  renderCircuits();
  renderInstagram();
  renderTestimonials();
  initFaq();
  initTourModal();
  initBookingModal();
  initContactForm();
  initScrollReveal();
  initCounters();
  initActiveNavLink();

  // Set minimum date for date pickers to today
  const today = new Date().toISOString().split("T")[0];
  const hsDate = document.getElementById("hsDate");
  if(hsDate) hsDate.min = today;
});
