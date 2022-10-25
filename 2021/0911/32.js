/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
	let stack = [root]
	let result = []
	while (stack.length) {
		let len = stack.length
		let node = stack.pop()
		result.push(node.val)
		for (let i = 0; i < len; i++) {
			node.right && stack.push(node.right)
			node.left && stack.push(node.left)
		}
	}
	return result
}
