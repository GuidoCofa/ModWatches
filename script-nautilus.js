// ================================
// NAUTILUS CONFIGURADOR (FIXED)
// ================================

// BASE PATH (ABSOLUTO = MÁS SEGURO)
const BASE_NAUTILUS = "/img/nautilus/";

// PARTES DISPONIBLES
const PARTS = ["case", "dial", "hands"];

// LABELS EN ESPAÑOL
const PART_LABELS_ES = {
  case: "Caja",
  dial: "Dial",
  hands: "Agujas"
};

// ESTADO INICIAL (DEFAULT REAL)
const config = {
  case: "rose_gold",
  dial: "blue_open_dial",
  hands: "silver"
};

// MAPEO PART → IMG ID
const IMAGE_IDS = {
  case: "dj-case",
  dial: "dj-dial",
  hands: "nautilus-hands"
};

// ================================
// NORMALIZAR VALORES (CLAVE)
// ================================
function normalizeValue(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_");
}

// ================================
// ACTUALIZAR PREVIEW
// ================================
function updateLayerNautilus(part, rawValue) {
  const imgId = IMAGE_IDS[part];
  const img = document.getElementById(imgId);
  if (!img) return;

  const value = normalizeValue(rawValue);
  const src = `${BASE_NAUTILUS}${part}/${value}.png`;

  img.onerror = () => {
    console.error(`Imagen no encontrada: ${src}`);
  };

  img.src = src;
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
  if (!PARTS.includes(part)) return;

  const value = option.dataset.value || config[part];

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
  const phoneNumber = "5491137003736";

  let message = `Hola, quiero comprar un Nautilus personalizado.\n\n`;
  message += `Configuración elegida:\n`;
  message += `• ${PART_LABELS_ES.case}: ${config.case}\n`;
  message += `• ${PART_LABELS_ES.dial}: ${config.dial}\n`;
  message += `• ${PART_LABELS_ES.hands}: ${config.hands}`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}

// ================================
// INIT (DEFAULT GARANTIZADO)
// ================================
window.addEventListener("DOMContentLoaded", () => {
  PARTS.forEach(part => {
    updateLayerNautilus(part, config[part]);
  });

  activateInitialOptionsNautilus();
});


