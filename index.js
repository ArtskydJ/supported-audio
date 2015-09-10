module.exports = function supported(exts) {
	if (!Array.isArray(exts)) throw new Error('Expected `extensions` to be an array')
	exts = exts.map(fixExtension)
	var playabilities = exts.map(ratePlayability)
	var bestPlayIndex = indexOfHighestNumber(playabilities)
	return playabilities[bestPlayIndex] ? exts[bestPlayIndex] : null
}

function indexOfHighestNumber(array) {
	var highestNumber = Math.max.apply(null, array)
	return array.indexOf(highestNumber)
}

function fixExtension(ext) {
	return ext.replace(/^(audio\/|.*\.)/, '')
}

function ratePlayability(ext) {
	var playabilityString = ''
	try {
		playabilityString = new Audio().canPlayType('audio/' + ext)
	} catch (e) {}
	return playabilityMap[playabilityString]
}

var playabilityMap = {
	probably: 2,
	maybe: 1,
	'': 0
}
