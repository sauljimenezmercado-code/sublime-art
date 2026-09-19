import { createWhatsAppUrl } from "./whatsapp.js";

const header = document.querySelector("#site-header");
const menuToggle = document.querySelector("#menu-toggle");
const primaryNav = document.querySelector("#primary-nav");
const contactStatus = document.querySelector("#contact-status");

export function initMenu() {
  if (!menuToggle || !primaryNav) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
    document.body.classList.toggle("menu-open", isOpen);
  });

  primaryNav.addEventListener("click", event => {
    if (event.target.closest("a:not(.button)")) {
      primaryNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Abrir menú");
      document.body.classList.remove("menu-open");
    }
  });

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });
  }
}

export function initWhatsAppButtons() {
  document.addEventListener("click", event => {
    const button = event.target.closest("[data-whatsapp]");
    if (!button) return;

    const isUnconfigured = !button.href || button.getAttribute("href") === "#" || button.href.endsWith("/#");
    if (isUnconfigured) {
      event.preventDefault();
      alert("El número de WhatsApp aún está pendiente de configurar.");
    }
  });

  document.querySelectorAll("[data-whatsapp]").forEach(button => {
    button.href = createWhatsAppUrl();
    if (button.href === window.location.href + "#") {
      button.setAttribute("aria-disabled", "true");
      button.setAttribute("title", "Configura primero el número de WhatsApp");
    }
  });

  if (contactStatus) {
    const configured = document.querySelector('[data-whatsapp][href^="https://wa.me/"]');
    contactStatus.textContent = configured
      ? "Atención personalizada por WhatsApp"
      : "Número de WhatsApp pendiente de confirmar";
  }
}
