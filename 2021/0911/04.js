/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
	for (let i = 0; i < matrix.length; i++) {
		let arr = matrix[i]
		for (let j = arr.length - 1; j >= 0; j--) {
			let value = matrix[i][j]
			if (value === target) return true
			if (value < target) {
				break
			}
		}
	}
	return false
}

var matrix = [
	[1, 4, 7, 11, 15],
	[2, 5, 8, 12, 19],
	[3, 6, 9, 16, 22],
	[10, 13, 14, 17, 24],
	[18, 21, 23, 26, 30]
]

matrix = [[-5]]
console.log(findNumberIn2DArray(matrix, -5))
