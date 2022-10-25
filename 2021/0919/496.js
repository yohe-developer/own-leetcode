/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
	let result = []
	for (const num of nums1) {
		let index = nums2.findIndex((n) => n === num)
		if (index >= 0) {
			let max = num
			for (let i = index; i < nums2.length; i++) {
				if (nums2[i] > num) {
					max = nums2[i]
					break
				}
			}
			result.push(max > num ? max : -1)
		}
	}
	console.log(result)
	return result
}

nextGreaterElement([2, 4], [1, 2, 3, 4])
