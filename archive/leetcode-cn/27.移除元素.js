/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	let start = 0
	for (let index = 0; index < nums.length; index++) {
		if (val === nums) {
			nums[start++] = nums[index]
		}
	}
	return nums
}
// @lc code=end
