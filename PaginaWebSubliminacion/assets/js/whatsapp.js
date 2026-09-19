import { SITE_CONFIG } from "./config.js";

export function createWhatsAppUrl(message = SITE_CONFIG.defaultMessage) {
  const phone = SITE_CONFIG.whatsappPhone.trim().replace(/\D/g, "");
  if (!phone) return "#";
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function messageForProduct(product) {
  const extra = product.whatsappNote ? ` ${product.whatsappNote}` : "";
  return `Hola, me interesa el producto "${product.name}". ¿Podrían darme más información?${extra}`;
}

export function messageForCategory(categoryName) {
  return `Hola, me interesan sus productos de la categoría "${categoryName}". ¿Qué opciones tienen disponibles?`;
}
