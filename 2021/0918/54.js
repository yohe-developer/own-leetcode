/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
	let result = []
	let help = function (root) {
		if (!root) return
		root.left && help(root.left)
		result.push(root.val)
		root.right && help(root.right)
	}
	help(root)
	return result[result.length - k]
}
