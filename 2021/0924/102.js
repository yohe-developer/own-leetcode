/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
	if (!root) return []
	let stack = [root]
	let result = []
	while (stack.length) {
		let len = stack.length
		let target = []
		for (let i = 0; i < len; i++) {
			let item = stack.shift()
			target.push(item.val)
			item.left && stack.push(item.left)
			item.right && stack.push(item.right)
		}
		result.push(target)
	}
	return result
}
