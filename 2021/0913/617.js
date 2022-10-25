/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
	if (root1 === null && root2 === null) return null

	root1.left = root1.left || 0 + root2.left || 0
	root1.right = root1.right || 0 + root2.right || 0

	mergeTrees(root1.left, root2.left)
	mergeTrees(root1.right, root2.right)

	return root1
}
