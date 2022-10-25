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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	let result = []
	const help = function (root, path) {
		path.push(root.val)
		if (root.left === null && root.right === null) {
			result.push(path.join("-->"))
			return true
		}
		if (root.left) {
			help(root.left, path)
			path.pop()
		}
		if (root.right) {
			help(root.right, path)
			path.pop()
		}
	}
	help(root, [])
	return result
}
