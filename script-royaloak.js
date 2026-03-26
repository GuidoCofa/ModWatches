// ========================================
// ROYAL OAK CONFIGURADOR
// ========================================

// PARTES Y DEFAULTS
const parts = {
  case: "1",
  dial: "1",
  hands: "1",
  seconds: "1"
};

// LABELS EN ESPAÑOL (SOLO TÍTULOS)
const PART_LABELS_ES = {
  case: "Caja",
  dial: "Dial",
  hands: "Agujas",
  seconds: "Segundos"
};

// ========================================
// ACTUALIZAR PREVIEW DEL RELOJ
// ========================================
function updateWatch() {
  const caseImg = document.getElementById("royaloak-case");
  const dialImg = document.getElementById("royaloak-dial");
  const handsImg = document.getElementById("royaloak-hands");
  const secondsImg = document.getElementById("royaloak-seconds");

  if (caseImg) caseImg.src = `img/royaloak/case/${parts.case}.png`;
  if (dialImg) dialImg.src = `img/royaloak/dial/${parts.dial}.png`;
  if (handsImg) handsImg.src = `img/royaloak/hands/${parts.hands}.png`;
  if (secondsImg) secondsImg.src = `img/royaloak/seconds/${parts.seconds}.png`;
}

// ========================================
// MARCAR OPCIÓN ACTIVA
// ========================================
function setActiveOption(part, value) {
  document
    .querySelectorAll(`.dj-option[data-part="${part}"]`)
    .forEach(el => el.classList.remove("active"));

  const option = document.querySelector(
    `.dj-option[data-part="${part}"][data-value="${value}"]`
  );

  if (option) option.classList.add("active");
}

// ========================================
// CLICK EN OPCIONES
// ========================================
document.querySelectorAll(".dj-option").forEach(option => {
  option.addEventListener("click", () => {
    const part = option.dataset.part;
    const value = option.dataset.value;

    parts[part] = value;
    setActiveOption(part, value);
    updateWatch();
  });
});

// ========================================
// DEFAULT AL CARGAR
// ========================================
document.addEventListener("DOMContentLoaded", () => {
  // Activar defaults visualmente
  Object.keys(parts).forEach(part => {
    setActiveOption(part, parts[part]);
  });

  // Render inicial del reloj
  updateWatch();
});

// ========================================
// WHATSAPP
// ========================================
function buyCurrentProductRoyalOak() {
  const phoneNumber = "5491137003736";

  let message = `Hola, quiero comprar un Royal Oak personalizado.\n\n`;
  message += `Configuración elegida:\n`;
  message += `• ${PART_LABELS_ES.case}: ${parts.case}\n`;
  message += `• ${PART_LABELS_ES.dial}: ${parts.dial}\n`;
  message += `• ${PART_LABELS_ES.hands}: ${parts.hands}\n`;
  message += `• ${PART_LABELS_ES.seconds}: ${parts.seconds}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

// ------------------------------------------------------------------
// MENÚ MÓVIL Y DROPDOWNS (IGUAL AL DE DAYTONA)

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
    if (menu !== dropdownMenu) {
      menu.classList.remove("active");
    }
  });

  dropdownMenu.classList.toggle("active");
}

// Cerrar menú móvil al clickear links normales
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

