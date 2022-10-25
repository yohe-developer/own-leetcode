/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 输入: candidates = [10,1,2,7,6,1,5], target = 8,
// 	所求解集为: [ [1, 7], [1, 2, 5], [2, 6], [1, 1, 6] ]
const combinationSum2 = function (candidates, target) {
	let result = []
	let collect = []
	const help = function (index) {
		if (target === collect.reduce((a, b) => a + b, 0)) {
			result.push([...collect])
			return
		}
		for (let i = index; i < candidates.length; i++) {
			let item = candidates[i]
			if (collect.includes(item)) {
				continue
			}
			collect.push(item)
			help(i)
			collect.pop()
		}
	}
	help(0)
	console.log(result)
}

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
