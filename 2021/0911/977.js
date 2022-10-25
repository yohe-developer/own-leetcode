/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums) {
	let start = 0
	let end = nums.length - 1
	let result = []
	while (start <= end) {
		let _a = Math.pow(nums[start], 2)
		let _b = Math.pow(nums[end], 2)
		if (_a > _b) {
			result.unshift(_a)
			start++
		} else {
			result.unshift(_b)
			end--
		}
	}
	return result
}

console.log(sortedSquares([-4, -1, 0, 3, 10]))
