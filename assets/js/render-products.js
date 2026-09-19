import { CATEGORIES, PRODUCTS, GALLERY_ITEMS } from "./products-data.js";
import { createWhatsAppUrl, messageForProduct, messageForCategory } from "./whatsapp.js";

const categoryGrid = document.querySelector("#category-grid");
const productGrid = document.querySelector("#product-grid");
const filterRow = document.querySelector("#filter-row");
const galleryGrid = document.querySelector("#gallery-grid");

export function renderCategories(onSelectCategory) {
  categoryGrid.innerHTML = CATEGORIES.map(category => `
    <button class="category-card" type="button" data-category="${category.id}">
      <img src="${category.image}" alt="${category.name}" loading="lazy">
      <span class="category-number">${category.number}</span>
      <h3>${category.name}</h3>
      <span class="category-arrow" aria-hidden="true">→</span>
    </button>
  `).join("");

  categoryGrid.addEventListener("click", event => {
    const card = event.target.closest("[data-category]");
    if (!card) return;
    onSelectCategory(card.dataset.category);
    document.querySelector("#productos")?.scrollIntoView({ behavior: "smooth" });
  });
}

export function renderFilters(activeCategory, onSelectCategory) {
  const filters = [{ id: "all", name: "Todos" }, ...CATEGORIES];
  filterRow.innerHTML = filters.map(filter => `
    <button class="filter-button" type="button" data-filter="${filter.id}"
      aria-pressed="${activeCategory === filter.id}">
      ${filter.name}
    </button>
  `).join("");

  filterRow.onclick = event => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    onSelectCategory(button.dataset.filter);
  };
}

export function renderProducts(activeCategory = "all") {
  const visibleProducts = activeCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter(product => product.category === activeCategory);

  productGrid.innerHTML = visibleProducts.map(product => `
    <article class="product-card">
      <div class="product-visual">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-content">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <a class="button button-outline" data-whatsapp="product" href="${createWhatsAppUrl(messageForProduct(product))}">
          Pedir por WhatsApp
        </a>
      </div>
    </article>
  `).join("");
}

export function renderGallery() {
  galleryGrid.innerHTML = GALLERY_ITEMS.map((item, index) => `
    <figure class="gallery-item">
      <img src="${item.image}" alt="${item.title}" loading="lazy">
      <figcaption>${String(index + 1).padStart(2, "0")} · ${item.title}</figcaption>
    </figure>
  `).join("");
}

export function getCategoryMessage(categoryId) {
  const category = CATEGORIES.find(item => item.id === categoryId);
  return category ? messageForCategory(category.name) : undefined;
}
