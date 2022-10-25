/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
	let map = {}

	for (let i = 0; i < nums.length; i++) {
		let value = nums[i]
		if (!map[value]) {
			map[value] = 1
		} else {
			map[value] += 1
		}
		if (map[value] > 1) {
			return nums[i]
		}
	}
}

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
