function fetchProductsThen() {
  fetch("https://www.course-api.com/javascript-store-products")
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch("https://www.course-api.com/javascript-store-products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.querySelector("#product-container");
  container.innerHTML = "";

  products.slice(0, 5).forEach((product) => {
    const name = product.fields.name;
    const price = product.fields.price / 100;
    const image = product.fields.image[0].url;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <h2>${name}</h2>
      <p>$${price.toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

function handleError(error) {
  console.log(`An error occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync();