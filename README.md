# is-command-exists [![Build Status](https://travis-ci.org/jandersonmartins/is-command-exists.svg?branch=master)](https://travis-ci.org/jandersonmartins/is-command-exists)

Verify if command exists on linux.

## installation

```bash
$ npm install is-command-exists
```

## Example

```js
const isCommandExists = require('is-command-exists');

// returns true or false
const exists = await isCommandExists('ls')
```
