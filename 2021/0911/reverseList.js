function ListNode(val, next) {
	this.val = val || null
	this.next = next || null
}

function creatList() {
	let arr = [1, 2, 3, 4, 5, null]
	let root = new ListNode()
	arr.map((item) => {
		root = new ListNode(item, root)
	})
	return root.next
}
let listNode = creatList()
console.log(listNode)

function reverseList(head) {
	let cur = head

	while (cur) {
		let next = cur.next
		cur.next = head
		head = cur
		cur = next
	}

	return head
}

let b = reverseList(listNode)
console.log(b)
