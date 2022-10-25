/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let map = new Map()
	for (let i = 0; i < nums.length; i++) {
		let num = target - nums[i]

		if (map.has(num)) {
			return [map.get(num), i]
		}
		map.set(nums[i], i)
	}
}
// @lc code=end
