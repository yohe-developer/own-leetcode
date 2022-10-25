/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * 输入：n = 4, k = 2
 输出：
 [
 [2,4],
 [3,4],
 [2,3],
 [1,2],
 [1,3],
 [1,4],
 ]
 */
var combine = function (n, k) {
	let result = []
	let target = []
	const help = function (index) {
		if (target.length === k) {
			result.push([...target])
			return
		}
		for (let i = index; i < 5; i++) {
			if (target.includes(i)) {
				continue
			}
			target.push(i)
			help(i + 1)
			target.pop()
		}
	}
	help(1)
	return result
}

combine(4, 2)
