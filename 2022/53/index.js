/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let result = 0
	let max = -Infinity
	for (let i = 0; i < nums.length; i++) {
		if (result > 0) {
			result += nums[i]
		} else {
			result = nums[i]
		}
		max = Math.max(result, max)
	}
	return max
}

const nums = [-1, 1]

console.log(maxSubArray(nums))
