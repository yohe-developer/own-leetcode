/**
 * @param {number[]} numbers
 * @return {number}
 * 输入：[3,4,5,1,2]
 输出：1
 */
var minArray = function (numbers) {
	for (let i = 1; i < numbers.length; i++) {
		if (numbers[i] < numbers[i - 1]) {
			return numbers[i]
		}
	}
}

console.log(minArray([3, 4, 5, 1, 2], 1))
