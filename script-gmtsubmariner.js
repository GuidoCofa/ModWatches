// =====================================
// GMT SUBMARINER CONFIGURADOR — FIX FINAL
// =====================================

// BASE
const BASE_GMTSUB = "img/gmtsubmariner/";

// PARTES DEL MODELO
const PARTS = [
  "case",
  "bracelet",
  "bezel",
  "dial",
  "hands",
  "secondhands",
  "gmthand"
];

// LABELS EN ESPAÑOL (SOLO TÍTULOS)
const PART_LABELS_ES = {
  case: "Caja",
  bracelet: "Brazalete",
  bezel: "Bisel",
  dial: "Dial",
  hands: "Agujas",
  secondhands: "Agujas secundarias",
  gmthand: "Aguja GMT"
};

// ESTADO ACTUAL (DATA-VALUE, NO TEXTO HUMANO)
const selectedGMTSub = {
  case: "1",
  bracelet: "1",
  bezel: "1",
  dial: "1",
  hands: "1",
  secondhands: "1",
  gmthand: "1"
};

// MAPEO PART → IMG ID
const IMAGE_IDS = {
  case: "dj-case",
  bracelet: "dj-bracelet",
  bezel: "gmtsub-bezel",
  dial: "dj-dial",
  hands: "gmtsub-hands",
  secondhands: "gmtsub-secondhands",
  gmthand: "gmtsub-gmthand"
};

// ================================
// ACTUALIZAR PREVIEW
// ================================
function updateLayerGMTSub(part, value) {
  const imgId = IMAGE_IDS[part];
  const img = document.getElementById(imgId);

  if (!img) return;

  img.src = `${BASE_GMTSUB}${part}/${value}.png`;
  selectedGMTSub[part] = value;
}

// ================================
// ACTIVAR OPCIONES INICIALES
// ================================
function activateInitialOptionsGMTSub() {
  PARTS.forEach(part => {
    const option = document.querySelector(
      `.dj-option[data-part="${part}"][data-value="${selectedGMTSub[part]}"]`
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
  updateLayerGMTSub(part, value);
});

// ================================
// OBTENER TEXTO HUMANO DESDE HTML
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
function buyCurrentProductGMTSubmariner() {
  const phoneNumber = "5491137003736";

  let message = `Hola, quiero comprar un Submariner & GMT personalizado.\n\n`;
  message += `Configuración elegida:\n`;

  PARTS.forEach(part => {
    const label = PART_LABELS_ES[part] || part;
    const value = getOptionLabel(part, selectedGMTSub[part]);

    message += `• ${label}: ${value}\n`;
  });

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
}

// ================================
// INIT
// ================================
window.addEventListener("DOMContentLoaded", () => {
  PARTS.forEach(part => {
    updateLayerGMTSub(part, selectedGMTSub[part]);
  });

  activateInitialOptionsGMTSub();
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
