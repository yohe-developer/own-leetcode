/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 示例：
 s = "leetcode"
 返回 0
 s = "loveleetcode"
 返回 2
 */

/**
 * @param {string} s
 * @return {string}
 */
var firstUniqChar = function (s) {
	let map = {}

	for (let i = 0; i < s.length; i++) {
		let value = map[s[i]] || 0
		map[s[i]] = value + 1
	}
	for (let i = 0; i < s.length; i++) {
		if (map[s[i]] === 1) {
			return s[i]
		}
	}
}

/**
 * 第一个 和最后一个 在同一位置  说明 是 第一个 唯一的
 * @param s
 * @returns {*}
 */
function firstUniqChar1(s) {
	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
			return s[i]
		}
	}
}
console.log(firstUniqChar1("loveleetcode"))
