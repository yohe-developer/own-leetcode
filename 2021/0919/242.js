/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * 输入: s = "anagram", t = "nagaram"
 输出: true
 */
var isAnagram = function (s, t) {
	const getIndex = (s) => s.charCodeAt(0) - "a".charCodeAt(0)

	let arr = Array.from({ length: 26 }, () => 0)
	let arr2 = Array.from({ length: 26 }, () => 0)
	for (const sElement of s) {
		arr[getIndex(sElement)]++
	}
	for (const sElement of t) {
		arr2[getIndex(sElement)]++
	}

	return arr.join("") === arr2.join("")
}
