// ==============================
// CONFIGURACIÓN: RELOJ SANTOS
// ==============================

const santosConfig = {
  bracelet: "blue",
  case: "rose",
  dial: "blue",
  hands: "rose",
}

// ===========================
// FUNCIÓN PARA CAMBIAR CAPAS
// ===========================
function updateSantosLayer(part, value) {
  const img = document.getElementById(`santos-${part}`)
  if (img) {
    img.src = `img/santos/${part}/${value}.png`
    santosConfig[part] = value
  }
}

// =========================
// MARCAR OPCIÓN COMO ACTIVA
// =========================
function setActiveSantosOption(part, value) {
  // Remover clase active de todas las opciones de esa parte
  document.querySelectorAll(`[data-part="${part}"]`).forEach((opt) => {
    opt.classList.remove("active")
  })
  // Agregar clase active a la opción seleccionada
  const selected = document.querySelector(`[data-part="${part}"][data-value="${value}"]`)
  if (selected) {
    selected.classList.add("active")
  }
}

// ==========================
// CLICK EN OPCIÓN
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  // Marcar las opciones iniciales como activas
  setActiveSantosOption("bracelet", "blue")
  setActiveSantosOption("case", "rose")
  setActiveSantosOption("dial", "blue")
  setActiveSantosOption("hands", "rose")

  // Listener para cambiar las opciones
  document.querySelectorAll(".dj-option").forEach((option) => {
    option.addEventListener("click", function () {
      const part = this.getAttribute("data-part")
      const value = this.getAttribute("data-value")
      updateSantosLayer(part, value)
      setActiveSantosOption(part, value)
    })
  })

  // Listener para el botón de compra
  const buyBtn = document.getElementById("buyBtn")
  if (buyBtn) {
    buyBtn.addEventListener("click", buyCurrentProductSantos)
  }
})

// ==========================
// FUNCIÓN DE COMPRA (WhatsApp)
// ==========================
function buyCurrentProductSantos() {
  const message = `Hola, quiero comprar un Santos personalizado.

*Configuración elegida:*
• Bracelet: ${santosConfig.bracelet}
• Case: ${santosConfig.case}
• Dial: ${santosConfig.dial}
• Hands: ${santosConfig.hands}`

  const phoneNumber = "5491141412344"
  const encodedMessage = encodeURIComponent(message)
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  window.open(whatsappURL, "_blank")
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
