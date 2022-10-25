/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	let map = new Set()
	let temp = headA
	while (temp) {
		map.add(temp)
		temp = temp.next
	}
	temp = headB
	while (temp) {
		if (map.has(temp)) {
			return temp.val
		}
		temp = temp.next
	}
	return null
}

function ListNode(val, next) {
	this.val = val
	this.next = next || null
}

function creatList(arr) {
	let head
	let root = (head = new ListNode())

	arr.map((item) => {
		let node = new ListNode(item, null)
		root.next = node
		root = node
	})
	return head.next
}
let listNode = creatList([4, 1, 8, 4, 5])
let b = creatList([5, 0, 1, 8, 4, 5])
console.log(listNode)

let c = getIntersectionNode(listNode, b)
console.log(c)
