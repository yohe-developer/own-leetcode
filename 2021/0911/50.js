/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
	let map = new Map()

	for (const sElement of s) {
		map.set(sElement, (map.get(sElement) || 0) + 1)
	}
	console.log(map)
	for (const [a, b] of map) {
		if (b === 1) {
			return a
		}
	}
	return ""
}

console.log(firstUniqChar("abaccdeff"))
