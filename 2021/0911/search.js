/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 输入: nums = [5,7,7,8,8,10], target = 8
 输出: 2
 */
var search = function (nums, target) {
	let start = 0
	let end = nums.length
	let count = 0
	while (start < end) {
		let mid = Math.floor((start + end) / 2)

		if (nums[mid] === target) {
			let cur = mid
			while (nums[cur++] === target) {
				count++
			}
			cur = mid - 1
			while (nums[cur--] === target) {
				count++
			}
			return count
		}

		if (nums[mid] > target) {
			end = mid
		} else {
			start = mid + 1
		}
	}
}

console.log(search([5, 7, 7, 8, 8, 10], 8))
