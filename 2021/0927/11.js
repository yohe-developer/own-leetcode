var maxArea = function (height) {
	let start = 0
	let end = height.length - 1
	let max = -Infinity
	while (start < end) {
		let min = Math.min(height[start], height[end])

		max = Math.max((end - start) * min, max)
		if (height[start] < height[end]) {
			start++
		} else {
			end--
		}
	}
	return max
}
