# Asynchronous programming

## Promises

### Terminology

## A promise can be in one of 3 states:

- **pending**: the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet. This is the state your promise is in when it's returned from a call to fetch(), and the request is still being made
- **fulfilled**: the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called
- **rejected**: the asynchronous function has failed. When a promise is rejected, its catch() handler is called

The term **settled** can be used to cover both fulfilled and rejected.

Note that what "succeeded" or "failed" means here is up to the API in question: for example, `fetch()` considers a request successful if the server returned an error like **404 Not Found**, but not if a network error prevented the request being sent.
