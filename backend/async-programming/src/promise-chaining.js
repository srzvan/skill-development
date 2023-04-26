import fetch from "node-fetch";

function fetchProducts(withError = false) {
  const URL = withError
    ? "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    : "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

  console.log("Before calling `fetch`");

  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      console.log("Data fetched");
      return response.json();
    })
    .then(data => {
      console.log(`There are ${data.length} products & the name of the first product is "${data[0].name}"`);
    })
    .catch(error => {
      console.error(`Could not get products: ${error}`);
    });

  console.log("Fetching data...");
}

fetchProducts();
