/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function (root, p, q) {
// 	let cur = root
// 	// eslint-disable-next-line no-constant-condition
// 	while (true) {
// 		if (p.val < cur.val && q.val < cur.val) {
// 			cur = cur.left
// 		} else if (p.val > cur.val && q.val > cur.val) {
// 			cur = cur.right
// 		} else {
// 			break
// 		}
// 	}
// 	return cur
// }

function lowestCommonAncestor(root, p, q) {
	if (root === null || root === p || root === q) {
		return root
	}
	let left = lowestCommonAncestor(root.left, p, q)
	let right = lowestCommonAncestor(root.right, p, q)
	if (left && right) {
		return root
	}
	if (left) return left
	if (right) return right

	return null
}
