import { renderCategories, renderFilters, renderProducts, renderGallery } from "./render-products.js";
import { initMenu, initWhatsAppButtons } from "./ui.js";

let activeCategory = "all";

function updateCatalog(category = "all") {
  activeCategory = category;
  renderFilters(activeCategory, updateCatalog);
  renderProducts(activeCategory);
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initWhatsAppButtons();

  renderCategories(category => updateCatalog(category));
  updateCatalog();
  renderGallery();

  document.querySelector("#current-year").textContent = new Date().getFullYear();
});
