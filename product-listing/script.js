const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const priceValue = document.getElementById("priceValue");
const sortOption = document.getElementById("sortOption");

let filteredProducts = [...products];

// Populate category dropdown
function populateCategories() {
  const categories = [...new Set(products.map(p => p.category))];
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Render product cards
function renderProducts(productArray) {
  productList.innerHTML = "";

  if (productArray.length === 0) {
    productList.innerHTML = "<p>No products found.</p>";
    return;
  }

  productArray.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="rating">⭐ ${product.rating}</p>
    `;
    productList.appendChild(card);
  });
}

// Apply filters
function applyFilters() {
  const category = categoryFilter.value;
  const maxPrice = parseInt(priceFilter.value);

  filteredProducts = products.filter(p => {
    return (category === "all" || p.category === category) && p.price <= maxPrice;
  });

  applySort();
}

// Apply sorting
function applySort() {
  const sort = sortOption.value;

  let sortedProducts = [...filteredProducts];

  if (sort === "priceLowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "ratingHighLow") {
    sortedProducts.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(sortedProducts);
}

// Event Listeners
categoryFilter.addEventListener("change", applyFilters);
priceFilter.addEventListener("input", () => {
  priceValue.textContent = `₹${priceFilter.value}`;
  applyFilters();
});
sortOption.addEventListener("change", applySort);

// Initialize
populateCategories();
applyFilters();
