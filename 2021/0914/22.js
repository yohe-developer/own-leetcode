/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
	let start = 0
	let end = 0
	let root = head
	let cur = head
	while (cur) {
		if (end - start < k) {
			cur = cur.next
			end++
		} else {
			cur = cur.next
			root = root.next
			end++
		}
	}
	return root
}
