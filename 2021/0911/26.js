/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
	const isSametree = function (A, B) {
		if (!B) return true
		if (!A) return false
		if (A.val !== B.val) return false

		return isSametree(A.left, B.left) && isSametree(A.right, B.right)
	}

	if (!A || !B) return 0
	let result = false
	if (A.val === B.val) {
		result = isSametree(A.left, B.left) && isSametree(A.right, B.right)
	}
	if (!result) {
		result = isSubStructure(A.left, B)
	}
	if (!result) {
		result = isSubStructure(A.right, B)
	}

	return result
}
