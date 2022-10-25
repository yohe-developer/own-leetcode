// function isIsomorphic(s, t) {
// 	for (let i = 0; i < s.length; i++) {
// 		console.log(s.indexOf(s[i]), t.indexOf(t[i]))
// 		if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
// 			return false
// 		}
// 	}
// 	return true
// }
var wordPattern = function (pattern, s) {
	if (s.length !== pattern.length) {
		return false
	}
	let map1 = {}
	let map2 = {}
	for (let i = 0; i < pattern.length; i++) {
		let pItem = pattern[i]
		let sItem = s[i]
		if (
			(map1[pItem] && map1[pItem] !== sItem) ||
			(map2[sItem] && map2[sItem] !== pItem)
		) {
			return false
		}
		map1[pItem] = sItem
		map2[sItem] = pItem
	}
	return true
}

var isIsomorphic = function (s, t) {
	let sm = {}
	let tm = {}

	for (let i = 0; i < s.length; i++) {
		if (sm[s[i]] != tm[t[i]]) {
			return false
		}
		sm[s[i]] = tm[t[i]] = i + 1
	}
	return true
}
console.log(isIsomorphic("add", "egg")) // true
// console.log(isIsomorphic("paper", "title")) // true
// console.log(wordPattern("xyxx", "xztt")) // false
// console.log(wordPattern("aaaaa", "abcda")) // false
