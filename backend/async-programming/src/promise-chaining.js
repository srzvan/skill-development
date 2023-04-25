import fetch from "node-fetch";

console.log("Before calling `fetch`");

fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
  .then(response => {
    console.log("Data fetched...");
    return response.json();
  })
  .then(data => {
    console.log(`The name of the first product in the response is "${data[0].name}"`);
  });

console.log("Fetching data...");
