/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (!head) return head
	let cur = head
	let root = null
	while (cur) {
		let next = cur.next
		cur.next = root

		root = cur
		cur = next
	}

	return root
}
