/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 * 输入：numbers = [2,7,11,15], target = 9
 输出：[1,2]
 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */
var twoSum = function (numbers, target) {
	numbers.unshift(0)
	let start = 1
	let end = numbers.length - 1

	while (start < end) {
		let value = numbers[start] + numbers[end]
		if (value === target) {
			return [start, end]
		} else if (value > target) {
			end--
		} else {
			start++
		}
	}
	return []
}
