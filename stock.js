document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("products-grid");
  if (!grid) return;

  // 🔥 PRODUCTOS EN STOCK (CAMBIÁS SOLO ESTO)
  const stockIDs = [5, 7];

  const allProducts = Object.values(products).flat();
  const stockProducts = allProducts.filter(p => stockIDs.includes(p.id));

  grid.innerHTML = stockProducts.map(product => `
    <div class="product-card" onclick="showProductModal(${product.id})">
      <div class="offer-badge">Disponible</div>
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          <span class="current-price">${product.price}</span>
          <span class="original-price">${product.originalPrice}</span>
        </div>
      </div>
    </div>
  `).join("");
});