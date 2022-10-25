// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
function permute(nums) {
	let result = []
	let target = []
	const help = function (index) {
		if (target.length === nums.length) {
			result.push([...target])
			return
		}
		for (let i = 0; i < nums.length; i++) {
			if (target.includes(nums[i])) {
				continue
			}
			target.push(nums[i])
			help(i + 1)
			target.pop()
		}
	}
	help(0)
	return result
}

permute([1, 2, 3])
