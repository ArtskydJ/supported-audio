supported-audio
=========

> Returns the best supported audio type for your browser of the types you provide.

[![Build Status](https://travis-ci.org/ArtskydJ/supported-audio.svg?branch=master)](https://travis-ci.org/ArtskydJ/supported-audio)

Meant to be used in the browser with [browserify](https://github.com/substack/node-browserify).

# example

```js
var bestSupported = require('supported-audio')

bestSupported([ 'ogg', 'wav', 'mp3' ]) // => 'mp3'
bestSupported([ '.ogg', '.wav', '.mp3' ]) // => 'mp3'
bestSupported([ 'file.ogg', 'file.wav', 'file.txt.mp3' ]) // => 'mp3'
bestSupported([ 'audio/ogg', 'audio/wav', 'audio/mp3' ]) // => 'mp3'
bestSupported([ 'lol', 'rofl', 'ttyl' ]) // => null
```

# api

```js
var bestSupported = require('supported-audio')
```

## `var type = bestSupported(types)`

- `types` is an array of types to check.
- **Returns** a string or null.

# install

With [npm](http://nodejs.org/download) do:

	npm install supported-audio

# license

[VOL](http://veryopenlicense.com)
