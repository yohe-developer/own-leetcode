/**
 * @param {number[]} nums
 * @return {number}
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

 你可以假设数组是非空的，并且给定的数组总是存在多数元素。


 输入：[3,2,3]
 输出：3

 */
var majorityElement = function (nums) {
	let result = null
	let count = 0
	nums.map((item) => {
		if (count === 0) {
			result = item
		} else {
			count += result === item ? 1 : -1
		}
	})
	return result
}

console.log(majorityElement([3, 2, 3, 2, 2]))
