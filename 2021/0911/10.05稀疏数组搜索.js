/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 *  输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。

 */
var findString = function (words, s) {
	if (!words.length) return -1

	let start = 0
	let end = words.length

	while (start < end) {
		let mid = Math.floor((start + end) / 2)
		while (start < mid && words[mid] === "") {
			mid--
		}
		if (words[mid] === s) return mid

		if (words[mid] < s) {
			start = mid + 1
		} else {
			end = mid
		}
	}
	return -1
}

console.log(
	findString(
		["at", "", "", "", "ball", "", "", "car", "", "", "dad", "", ""],
		"ball"
	)
)
