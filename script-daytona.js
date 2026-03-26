// ================================
// DAYTONA CONFIGURADOR — FIX ESPAÑOL
// ================================

// BASE
const BASE_DAYTONA = "img/daytona/";

// PARTES DEL MODELO
const PARTS = [
  "case",
  "bezel",
  "bracelet",
  "dial",
  "hands",
  "seconds",
  "chrono"
];

// LABELS EN ESPAÑOL (USUARIO / WHATSAPP)
const PART_LABELS_ES = {
  case: "Caja",
  bezel: "Bisel",
  bracelet: "Brazalete",
  dial: "Dial",
  hands: "Agujas",
  seconds: "Segundos",
  chrono: "Cronógrafo"
};

// ESTADO ACTUAL
const selectedDaytona = {
  case: "1",
  bezel: "1",
  bracelet: "1",
  dial: "1",
  hands: "1",
  seconds: "1",
  chrono: "1"
};

// MAPEO PART → IMG ID
const IMAGE_IDS = {
  case: "dj-case",
  bezel: "daytona-bezel",
  bracelet: "dj-bracelet",
  dial: "dj-dial",
  hands: "daytona-hands",
  seconds: "daytona-seconds",
  chrono: "daytona-chrono"
};

// ================================
// ACTUALIZAR PREVIEW
// ================================

function updateLayerDaytona(part, value) {
  const imgId = IMAGE_IDS[part];
  const img = document.getElementById(imgId);

  if (!img) return;

  img.src = `${BASE_DAYTONA}${part}/${value}.png`;
  selectedDaytona[part] = value;
}

// ================================
// ACTIVAR OPCIONES INICIALES
// ================================

function activateInitialOptionsDaytona() {
  PARTS.forEach(part => {
    const option = document.querySelector(
      `.dj-option[data-part="${part}"][data-value="${selectedDaytona[part]}"]`
    );
    if (option) option.classList.add("active");
  });
}

// ================================
// CLICK HANDLER GLOBAL
// ================================

document.addEventListener("click", (e) => {
  const option = e.target.closest(".dj-option");
  if (!option) return;

  const part = option.dataset.part;
  const value = option.dataset.value;

  if (!PARTS.includes(part)) return;

  document
    .querySelectorAll(`.dj-option[data-part="${part}"]`)
    .forEach(o => o.classList.remove("active"));

  option.classList.add("active");

  updateLayerDaytona(part, value);
});

// ================================
// OBTENER TEXTO DESDE HTML
// ================================

function getOptionLabel(part, value) {
  const el = document.querySelector(
    `.dj-option[data-part="${part}"][data-value="${value}"] span`
  );

  return el ? el.textContent.trim() : value;
}

// ================================
// WHATSAPP
// ================================

function buyCurrentProductDaytona() {
  const phoneNumber = "5491137003736";

  let message = `Hola, quiero comprar un Daytona personalizado.%0A%0A`;
  message += `*Configuración elegida:*%0A`;

  PARTS.forEach(part => {
    const label = PART_LABELS_ES[part];
    const value = getOptionLabel(part, selectedDaytona[part]);

    message += `• ${label}: ${value}%0A`;
  });

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}

// ================================
// INIT
// ================================

window.addEventListener("DOMContentLoaded", () => {
  PARTS.forEach(part => {
    updateLayerDaytona(part, selectedDaytona[part]);
  });

  activateInitialOptionsDaytona();
});

// ================================
// MENÚ MÓVIL
// ================================

function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  const mobileToggle = document.querySelector(".mobile-menu-toggle");

  if (!mobileNav || !mobileToggle) return;

  mobileNav.classList.toggle("active");
  mobileToggle.classList.toggle("active");
}

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

// Cerrar menú móvil al navegar
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    link.addEventListener("click", (e) => {
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

