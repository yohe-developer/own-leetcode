/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
	let map = new Map()
	let max = 0
	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			max = Math.max(max, i - map.get(s[i]) - 1)
		} else {
			map.set(s[i], i)
		}
	}
	return max
}
