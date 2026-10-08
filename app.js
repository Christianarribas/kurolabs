"use strict";

document.addEventListener("DOMContentLoaded", () => {
const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const productButtons = document.querySelectorAll(".product-card-button");
const modal = document.querySelector("#product-modal");
const modalTitle = document.querySelector("#modal-title");
const modalLabel = document.querySelector("#modal-label");
const closeModalButtons = document.querySelectorAll("[data-close-modal]");
const galleryThumbs = document.querySelectorAll(".gallery-thumb");
const currentYear = document.querySelector("#current-year");

/*

Estado de productos.

Los datos comerciales todavía no están definidos.

Esta estructura queda preparada para incorporar posteriormente

la información real sin necesidad de modificar la estructura HTML.
*/
const products = {
1: {
label: "PRODUCT / 01",
name: "Nombre pendiente"
},
2: {
label: "PRODUCT / 02",
name: "Nombre pendiente"
},
3: {
label: "PRODUCT / 03",
name: "Nombre pendiente"
},
4: {
label: "PRODUCT / 04",
name: "Nombre pendiente"
},
5: {
label: "PRODUCT / 05",
name: "Nombre pendiente"
},
6: {
label: "PRODUCT / 06",
name: "Nombre pendiente"
}
};

/*

Header al hacer scroll.
*/
const updateHeader = () => {
if (!header) return;
if (window.scrollY > 20) {
header.classList.add("scrolled");
} else {
header.classList.remove("scrolled");
}
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

/*

Menú responsive.
*/
const closeMenu = () => {
if (!mainNav || !menuToggle) return;
mainNav.classList.remove("is-open");
menuToggle.classList.remove("is-open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.setAttribute("aria-label", "Abrir menú");
};

if (menuToggle && mainNav) {
menuToggle.addEventListener("click", () => {
const isOpen = mainNav.classList.toggle("is-open");

menuToggle.classList.toggle("is-open", isOpen);
menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.setAttribute(
  "aria-label",
  isOpen ? "Cerrar menú" : "Abrir menú"
);
});
}

navLinks.forEach((link) => {
link.addEventListener("click", closeMenu);
});

/*

Fichas de producto.
*/
const openProductModal = (productId) => {
const product = products[productId];

if (!product || !modal || !modalLabel || !modalTitle) {
  return;
}

modalLabel.textContent = product.label;
modalTitle.textContent = product.name;

modal.classList.add("is-open");
modal.setAttribute("aria-hidden", "false");
document.body.classList.add("modal-open");

const closeButton = modal.querySelector(".modal-close");

if (closeButton) {
  closeButton.focus();
}

};

const closeProductModal = () => {
if (!modal) return;
modal.classList.remove("is-open");
modal.setAttribute("aria-hidden", "true");
document.body.classList.remove("modal-open");
};

productButtons.forEach((button) => {
button.addEventListener("click", () => {
openProductModal(button.dataset.product);
});
});

closeModalButtons.forEach((button) => {
button.addEventListener("click", closeProductModal);
});

/*

Cierre del modal con Escape.
*/
document.addEventListener("keydown", (event) => {
if (event.key === "Escape" && modal && modal.classList.contains("is-open")) {
closeProductModal();
}
});

/*

Galería preparada para futuras imágenes.

Actualmente solo gestiona el estado visual del thumbnail seleccionado.
*/
galleryThumbs.forEach((thumb) => {
thumb.addEventListener("click", () => {
galleryThumbs.forEach((item) => {
item.classList.remove("active");
});

thumb.classList.add("active");
});
});

/*

Año automático del footer.
*/
if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}
});
