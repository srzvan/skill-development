const worker = new Worker("./worker.js");

const generateButton = document.getElementById("generate");
const reloadButton = document.getElementById("reload");
const quotaInput = document.getElementById("quota");
const output = document.getElementById("output");

const userInput = document.getElementById("user-input");

generateButton.addEventListener("click", () => {
  worker.postMessage({
    command: "generate",
    quota: quotaInput.value,
  });
});

worker.addEventListener("message", () => {
  output.textContent = `Finished generating ${message.data} primes!`;
});

reloadButton.addEventListener("click", () => {
  userInput.value = 'Try typing in here immediately after pressing "Generate primes"';

  document.location.reload();
});
