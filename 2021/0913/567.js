/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	const getStr = function (s) {
		let arr = Array.from({ length: 26 }, () => 0)
		for (const s1Item of s) {
			arr[s1Item.charCodeAt(0) - "a".charCodeAt(0)]++
		}
		return arr.join("")
	}

	let target = getStr(s1)
	let start = 0
	let end = s1.length

	while (end <= s2.length) {
		let _str = s2.slice(start, end)
		if (target === getStr(_str)) {
			return true
		}
		start++
		end++
	}
	return false
}

console.log(checkInclusion("adc", "dcda"))
