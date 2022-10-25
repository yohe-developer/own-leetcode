/**
 * @param {number[]} nums
 * @return {number}
 * 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 */
var maxSubArray = function (nums) {
	let sum = 0
	let result = -Infinity
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i]
		result = Math.max(result, sum)
		if (sum < 0) {
			sum = 0
		}
	}
	return result
}
maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
