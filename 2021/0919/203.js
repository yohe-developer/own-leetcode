/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
	if (!head) return []
	let root = head

	while (head.next) {
		if (head.next.val === val) {
			head.next = head.next.next
			continue
		}
		head = head.next
	}
	return root
}

function ListNode(val, next) {
	this.val = val || null
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
let a = creatList([1, 2, 4, 5, 2])
let b = creatList([1, 3, 4])

let c = removeElements(a, 2)
console.log(c)
