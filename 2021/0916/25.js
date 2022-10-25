/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */
var mergeTwoLists = function (l1, l2) {
	let head = l1
	while (l1 || l2) {
		if (l2.val > l1.val) {
			l1 = l1.next
		} else {
			let next = l2.next
			l2.next = l1
			l1 = l2
			l2 = next
		}
	}
	return head
}
