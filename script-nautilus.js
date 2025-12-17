// ================================
// NAUTILUS CONFIGURADOR
// ================================

// BASE PATH
const BASE_NAUTILUS = "img/nautilus/";

// PARTES DISPONIBLES
const PARTS = ["case", "dial", "hands"];

// LABELS EN ESPAÑOL (SOLO TÍTULOS)
const PART_LABELS_ES = {
  case: "Caja",
  dial: "Dial",
  hands: "Agujas"
};

// ESTADO INICIAL
const config = {
  case: "Rose Gold",
  dial: "Blue open Dial",
  hands: "Silver"
};

// MAPEO PART → IMG ID
const IMAGE_IDS = {
  case: "dj-case",
  dial: "dj-dial",
  hands: "nautilus-hands"
};

// ================================
// ACTUALIZAR PREVIEW
// ================================
function updateLayerNautilus(part, value) {
  const imgId = IMAGE_IDS[part];
  const img = document.getElementById(imgId);
  if (!img) return;

  img.src = `${BASE_NAUTILUS}${part}/${value}.png`;
  config[part] = value;
}

// ================================
// ACTIVAR OPCIONES INICIALES
// ================================
function activateInitialOptionsNautilus() {
  PARTS.forEach(part => {
    const option = document.querySelector(
      `.dj-option[data-part="${part}"][data-value="${config[part]}"]`
    );
    if (option) option.classList.add("active");
  });
}

// ================================
// CLICK HANDLER GLOBAL
// ================================
document.addEventListener("click", e => {
  const option = e.target.closest(".dj-option");
  if (!option) return;

  const part = option.dataset.part;
  const value = option.dataset.value;
  if (!PARTS.includes(part)) return;

  document
    .querySelectorAll(`.dj-option[data-part="${part}"]`)
    .forEach(o => o.classList.remove("active"));

  option.classList.add("active");
  updateLayerNautilus(part, value);
});

// ================================
// WHATSAPP
// ================================
function buyCurrentProductNautilus() {
  const phoneNumber = "5491131667740";

  let message = `Hola, quiero comprar un Nautilus personalizado.\n\n`;
  message += `Configuración elegida:\n`;
  message += `• ${PART_LABELS_ES.case}: ${config.case}\n`;
  message += `• ${PART_LABELS_ES.dial}: ${config.dial}\n`;
  message += `• ${PART_LABELS_ES.hands}: ${config.hands}`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

// ================================
// INIT
// ================================
window.addEventListener("DOMContentLoaded", () => {
  PARTS.forEach(part => {
    updateLayerNautilus(part, config[part]);
  });

  activateInitialOptionsNautilus();
});

// ------------------------------------------------------------------
// MENÚ MÓVIL Y DROPDOWNS (IGUAL A DAYTONA)

// Abre/cierra menú hamburguesa
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");
  if (!mobileNav || !mobileToggle) return;

  mobileNav.classList.toggle("active");
  mobileToggle.classList.toggle("active");
}

// Dropdown Catálogo móvil
function toggleMobileDropdown(event) {
  event.preventDefault();
  event.stopPropagation();

  const dropdown = event.currentTarget.closest(".mobile-dropdown");
  const dropdownMenu = dropdown.querySelector(".mobile-dropdown-menu");
  if (!dropdown || !dropdownMenu) return;

  document.querySelectorAll(".mobile-dropdown-menu").forEach(menu => {
    if (menu !== dropdownMenu) menu.classList.remove("active");
  });

  dropdownMenu.classList.toggle("active");
}

// Cerrar menú móvil al clickear links normales
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", e => {
      if (link.classList.contains("dropdown-toggle")) {
        e.preventDefault();
        return;
      }

      const mobileNav = document.getElementById("mobile-nav");
      const mobileToggle = document.querySelector(".mobile-menu-toggle");
      if (mobileNav && mobileToggle) {
        mobileNav.classList.remove("active");
        mobileToggle.classList.remove("active");
      }
    });
  });
});
