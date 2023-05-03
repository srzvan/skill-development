const button = document.getElementById("set-alarm");
const nameInput = document.getElementById("name");
const delayInput = document.getElementById("delay");
const output = document.getElementById("output");

console.log(button, nameInput, delayInput, output);

// button.addEventListener("click", () => {
//   alarm(nameInput.value, delayInput.value)
//     .then(message => (output.textContent = message))
//     .catch(error => (output.textContent = `Couldn't set the alarm: ${error}`));
// });

button.addEventListener("click", async () => {
  try {
    const message = await alarm(nameInput.value, delayInput.value);

    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set the alarm: ${error}`;
  }
});

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error("Alarm delay must be a positive value");
    }

    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}
