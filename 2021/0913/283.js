/**
 * 输入: [0,1,0,3,12]
 输出: [1,3,12,0,0]
 */

var moveZeroes = function (nums) {
	let start = 0
	let end = 0

	while (end < nums.length) {
		if (nums[end] !== 0) {
			;[nums[start], nums[end]] = [nums[end], nums[start]]
			start++
		}
		end++
	}
	return nums
}

console.log(moveZeroes([0, 1, 0, 3, 12]))
