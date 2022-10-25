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
 * @return {boolean}
 */
var isSymmetric = function (root) {
	const help = function (left, right) {
		if (right === null && left === null) return true
		else if (right !== null && left === null) return false
		else if (right === null && left !== null) return false
		else if (right.val !== left.val) return false

		return help(left.left, right.right) && help(left.right, right.left)
	}
	return help(root.left, root.right)
}
// var isSymmetric = function (root) {
// 	const compare = function (left, right) {
// 		if (left === null && right !== null) return false
// 		else if (left !== null && right === null) return false
// 		else if (left === null && right === null) return true
// 		else if (left.val !== right.val) return false
//
// 		return compare(left.left, right.right) && compare(left.right, right.left)
// 	}
// 	if (!root) return true
// 	return compare(root.left, root.right)
// }
