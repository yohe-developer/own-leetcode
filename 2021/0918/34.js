var pathSum = function (root, target) {
	let value = []
	let result = []

	let help = function (root) {
		value.push(root.val)
		let sum = value.reduce((a, b) => a + b, 0)
		if (sum === target && root.left === null && root.right === null) {
			result.push([...value])
		}

		root.left && help(root.left)
		root.right && help(root.right)
		value.pop()
	}
	help(root)
	return result
}
