/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
	if (!root) return true
	const help = function (left, right) {
		if (left === null && right === null) return true
		if (left === null && right !== null) return false
		if (left !== null && right === null) return false
		if (left.val !== right.val) return false
		return help(left.left, right.right) && help(left.right, right.left)
	}

	return help(root.left, root.right)
}
