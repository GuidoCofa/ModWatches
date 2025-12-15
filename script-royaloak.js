// ========================================
// ROYAL OAK CONFIGURADOR
// ========================================

const parts = {
  case: 1,
  dial: 1,
  hands: 1,
  seconds: 1,
}

// Seleccionar opción
document.querySelectorAll(".dj-option").forEach((option) => {
  option.addEventListener("click", () => {
    const part = option.dataset.part
    const value = option.dataset.value

    // Remover clase active de otros elementos de la misma parte
    document.querySelectorAll(`.dj-option[data-part="${part}"]`).forEach((el) => {
      el.classList.remove("active")
    })

    // Agregar clase active a la opción seleccionada
    option.classList.add("active")

    // Actualizar imagen
    parts[part] = value
    updateWatch()
  })
})

// Actualizar el preview del reloj
function updateWatch() {
  const caseImg = document.getElementById("royaloak-case")
  const dialImg = document.getElementById("royaloak-dial")
  const handsImg = document.getElementById("royaloak-hands")
  const secondsImg = document.getElementById("royaloak-seconds")

  if (caseImg) caseImg.src = `img/royaloak/case/${parts.case}.png`
  if (dialImg) dialImg.src = `img/royaloak/dial/${parts.dial}.png`
  if (handsImg) handsImg.src = `img/royaloak/hands/${parts.hands}.png`
  if (secondsImg) secondsImg.src = `img/royaloak/seconds/${parts.seconds}.png`
}

// Función para comprar por WhatsApp
function buyCurrentProductRoyalOak() {
  const phoneNumber = "5493513125757"

  const config = `*Configuración elegida:*
• Case: ${parts.case}
• Dial: ${parts.dial}
• Hands: ${parts.hands}
• Seconds: ${parts.seconds}`

  const message = `Hola, quiero comprar un Royal Oak personalizado.

${config}`

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(whatsappUrl, "_blank")
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
