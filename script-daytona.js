// ================================
// DAYTONA CONFIGURADOR — DESDE CERO
// ================================

// BASE
const BASE_DAYTONA = "img/daytona/";

// PARTES QUE TIENE DAYTONA
const PARTS = [
  "case",
  "bezel",
  "bracelet",
  "dial",
  "hands",
  "seconds",
  "chrono"
];

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

  // Desactivar activos del mismo grupo
  document
    .querySelectorAll(`.dj-option[data-part="${part}"]`)
    .forEach(o => o.classList.remove("active"));

  option.classList.add("active");

  updateLayerDaytona(part, value);
});

// ================================
// WHATSAPP
// ================================

function buyCurrentProductDaytona() {
  const phoneNumber = "5491137003736"; // tu número

  let message = `Hola, quiero comprar un Daytona personalizado.%0A%0A`;
  message += `*Configuración elegida:*%0A`;

  PARTS.forEach(part => {
    message += `• ${capitalize(part)}: ${selectedDaytona[part]}%0A`;
  });

  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, "_blank");
}

// ================================
// UTIL
// ================================

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
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

// ------------------------------------------------------------------
// FUNCIONES PARA MENÚ MÓVIL Y DROPDOWNS

// Abre/cierra el menú hamburguesa
function toggleMobileMenu() {
  const mobileNav = document.getElementById("mobile-nav")
  const mobileToggle = document.querySelector(".mobile-menu-toggle")

  if (!mobileNav || !mobileToggle) {
    console.log("[v0] Mobile menu elements not found")
    return
  }

  mobileNav.classList.toggle("active")
  mobileToggle.classList.toggle("active")
}

// Abre/cierra el dropdown “Catálogo” dentro del menú móvil
function toggleMobileDropdown(event) {
  event.preventDefault()
  event.stopPropagation()

  const dropdown = event.currentTarget.closest(".mobile-dropdown")
  const dropdownMenu = dropdown.querySelector(".mobile-dropdown-menu")

  if (!dropdown || !dropdownMenu) {
    console.log("[v1] Mobile dropdown elements not found")
    return
  }

  // Cierra otros dropdowns abiertos
  document.querySelectorAll(".mobile-dropdown-menu").forEach((menu) => {
    if (menu !== dropdownMenu) {
      menu.classList.remove("active")
    }
  })

  // Alterna este dropdown
  dropdownMenu.classList.toggle("active")
}

// ------------------------------------------------------------------
// CERRAR EL MENÚ MÓVIL AL HACER CLIC EN LINKS NORMALES
// (pero NO cerrar cuando se pulsa el toggle de Catálogo)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      // Si es el toggle del Catálogo NO cerrar el menú hamburguesa
      if (link.classList.contains("dropdown-toggle")) {
        e.preventDefault()
        return // salir sin cerrar menú
      }
      // Para cualquier otro link normal, sí cerramos el menú hamburguesa
      const mobileNav = document.getElementById("mobile-nav")
      const mobileToggle = document.querySelector(".mobile-menu-toggle")
      if (mobileNav && mobileToggle) {
        mobileNav.classList.remove("active")
        mobileToggle.classList.remove("active")
      }
    })
  })
})
