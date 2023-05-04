addEventListener("message", message => {
  if (message.data.command === "generate") {
    generatePrimes(message.data.quota);
  }
});

function generatePrimes(quota) {
  const primes = [];
  const MAXIMUM = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random * (MAXIMUM + 1));

    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  postMessage(primes.length);

  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }

      return true;
    }
  }
}
