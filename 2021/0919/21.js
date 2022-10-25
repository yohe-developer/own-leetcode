var mergeTwoLists = function (l1, l2) {
	let head = new ListNode(-1)
	let root = head
	while (l1 && l2) {
		if (l1.val < l2.val) {
			head.next = l1
			l1 = l1.next
		} else {
			head.next = l2
			l2 = l2.next
		}
		head = head.next
	}
	head.next = l1 ? l1 : l2
	return root.next
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
let a = creatList([1, 2, 4])
let b = creatList([1, 3, 4])

let c = mergeTwoLists(a, b)
console.log(c)
