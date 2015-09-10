supported-audio
=========

Returns the best supported audio type for your browser of the types you provide.

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

# `var type = bestSupported(types, [defaultType])`

- `types` is an array of types to check
- **Returns** a file type from `types`. If none of `types` can be played, an empty string `''` is returned.

# install

With [npm](http://nodejs.org/download) do:

	npm install supported-audio

# license

[VOL](http://veryopenlicense.com)
