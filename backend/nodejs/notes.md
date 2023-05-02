# Node.js

## What is it?

Node.js is an open-source and cross-platform JavaScript runtime environment. It runs the V8 JavaScript engine which is the core of Google Chrome.

Node.js is single threaded and because of that I/O primitives from its standard library are asynchronous. Libraries in this ecosystem are written using non-blocking paradigms, making blocking behaviour the exception rather than the norm.

## Features

Node.js features are split into 3 categories:

- shipping - **stable** from the V8 perspective, are turned on by default and **do not required** any kind of runtime flag
- staged - almost-completed, **not stable** from the V8 perspective, can be turned on using the _--harmony_ runtime flag
- in progress - can be activated individually using their respective **harmony flag**; these flags are exposed by V8 and will potentially change without any deprecation notice

You can find which features are supported in which Node.js versions using the [node.green](https://node.green/) website.

### List all the _in progress_ features

```bash
node --v8-options | grep "in progress"
```

### Check the V8 engine version required for the current Node.js version

```bash
node -p process.versions.v8
```

## Development/production

Node.js always asumes it's running in development mode. You can signal that you're running in production using the `NODE_ENV` environment variable. Setting this variable to _production_ produces the following effects:

- logging is kept to a minimum, essential level
- more caching levels take place to optimize performance

### Set variable value using `export` command

```bash
export NODE_ENV=production
```

### Set variable value when executing `node`

```bash
NODE_ENV=production node app.js
```

You can use conditional statements to execute code in different environments:

```javascript
if (process.env.NODE_ENV === "development") {
  // ...
}

if (process.env.NODE_ENV === "production") {
  // ...
}

if (["production", "staging"].includes(process.env.NODE_ENV)) {
  // ...
}
```

Node.js has WebAssembly support through the `WebAssembly` global variable.
