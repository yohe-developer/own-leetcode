/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
	let left = 0
	let right = nums.length - 1

	while (left < right) {
		if (nums[left] % 2 === 0 && nums[right] % 2 !== 0) {
			;[nums[left], nums[right]] = [nums[right], nums[left]]
			left++
			right--
		}
		if (nums[left] % 2 !== 0) {
			left++
		}
		if (nums[right] % 2 === 0) {
			right--
		}
	}
	return nums
}

console.log(exchange([2, 16, 3, 5, 13, 1, 16, 1, 12, 18, 11, 8, 11, 11, 5, 1]))
