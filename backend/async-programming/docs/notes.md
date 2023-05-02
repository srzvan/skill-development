# Asynchronous programming

## Promises

### Terminology

## A promise can be in one of 3 states:

- **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made
- **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called
- **rejected**: the asynchronous function has failed. When a promise is rejected, its catch() handler is called

The term **settled** can be used to cover both fulfilled and rejected.

Another used term that's slightly confusing is **resolve(d)**. [This article](https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises/) explains the terminology taking this term into account.
