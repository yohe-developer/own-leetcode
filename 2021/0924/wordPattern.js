/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 * 输入: pattern = "abba", str = "dog cat cat dog"
 输出: true
 */
var wordPattern = function (pattern, s) {
	let arr = s.split(" ")
	if (arr.length !== pattern.length) return false
	let map1 = {}
	let map2 = {}
	for (let i = 0; i < pattern.length; i++) {
		let pItem = pattern[i]
		let sItem = arr[i]
		if (
			(map1[pItem] && map1[pItem] !== sItem) ||
			(map2[sItem] && map2[sItem] !== pItem)
		) {
			return false
		}
		map1[pItem] = sItem
		map2[sItem] = pItem
	}
	console.log(map1)
	console.log(map2)
	return true
}
console.log(wordPattern("abba", "dog cat cat dog"))
