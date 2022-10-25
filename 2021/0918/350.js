/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
	let map = new Map()
	let result = []
	for (const number of nums1) {
		map.set(number, map.has(number) ? map.get(number) + 1 : 1)
	}
	for (const number of nums2) {
		if (map.has(number)) {
			result.push(number)
			let value = map.get(number) - 1
			value <= 0 ? map.delete(number) : map.set(number, value)
		}
	}
	return result
}

//nums1 = [4,9,5], nums2 = [9,4,9,8,4]
intersect([4, 9, 5], [9, 4, 9, 8, 4])
