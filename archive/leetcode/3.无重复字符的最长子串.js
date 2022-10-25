/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let start = 0
	let end = 1
	let max = -Infinity
	while (end < s.length) {
		if (s[start] == s[end]) {
			max = Math.max(max, end - start)
			start++
		}
		end++
	}
	console.log("[ max ] >", max)
}
// @lc code=end
lengthOfLongestSubstring("pwwkew")
