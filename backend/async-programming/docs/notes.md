# Asynchronous programming

## Promises

### Terminology

### A promise can be in one of 3 states:

- **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made
- **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called
- **rejected**: the asynchronous function has failed. When a promise is rejected, its catch() handler is called

The term **settled** can be used to cover both fulfilled and rejected.

Another used term that's slightly confusing is **resolve(d)**. [This article](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) explains the terminology taking this term into account. In the executor implementation, we call the underlying asynchronous function.

### `Promise` constructor

The `Promise` constructor takes a single function as an argument - the _executor_.

The executor function receives two parameters:

- `resolve` - called if the underlying async function **succeeds**
- `reject` - called if the underlying async function **fails**; also called if the executor **throws an error**

A single param of any type can be passed to both `resolve` & `reject`.

## Workers

Workers offer the possibility to run code in a different thread. Code running on the main thread & worked code can communicate through messages. Workers cannot access the DOM, `window`, page elements etc.

There are 3 types of workers

- dedicated (or web worker)
- shared
- service
