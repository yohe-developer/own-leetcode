/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
/**
 * 输入: head = [4,5,1,9], val = 5
 输出: [4,1,9]
 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
 * @param head
 * @param val
 * @returns {*}
 */
var deleteNode = function (head, val) {
	if (!head) return
	if (head.val === val) return head.next
	let cur = head

	while (cur.next) {
		let next = cur.next
		if (next.val === val) {
			cur.next = cur.next.next
			break
		}
		cur = next
	}
	return head
}
