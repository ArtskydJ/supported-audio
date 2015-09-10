var test = require('tape')
var bestSupported = require('./index.js')

test('basic functionality', function (t) {
	t.equal( bestSupported([ 'ogg', 'wav', 'mp3' ]), 'mp3')
	t.equal( bestSupported([ '.ogg', '.wav', '.mp3' ]), 'mp3')
	t.equal( bestSupported([ 'file.ogg', 'file.wav', 'file.txt.mp3' ]), 'mp3')
	t.equal( bestSupported([ 'audio/ogg', 'audio/wav', 'audio/mp3' ]), 'mp3')
	t.end()
})

test('cant play', function (t) {
	t.equal( bestSupported([ 'lol', 'txt' ]), null)
	t.equal( bestSupported([]), null)
	t.end()
})

test('bad args', function (t) {
	t.throws(function() { bestSupported() }, /array/)
	t.throws(function() { bestSupported({}) }, /array/)
	t.throws(function() { bestSupported(null) }, /array/)
	t.end()
})
