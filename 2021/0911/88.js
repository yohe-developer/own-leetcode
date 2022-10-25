/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 输出：[1,2,2,3,5,6]
 解释：需要合并 [1,2,3] 和 [2,5,6] 。
 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
 */
var merge = function (nums1, m, nums2, n) {
	let len = nums1.length - 1
	n = n - 1
	m = m - 1
	while (m >= 0 && n >= 0) {
		nums1[len--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
	}
	while (m >= 0) {
		nums1[len--] = nums1[m--]
	}
	while (n >= 0) {
		nums1[len--] = nums2[n--]
	}

	return nums1
}

console.log(merge([1, 2, 3, 0, 0, 0], 2, [2, 5, 6], 2))
