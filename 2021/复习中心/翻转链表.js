function reverseList(head) {
	let root = null
	let cur = head

	while (cur) {
		let next = cur.next
		cur.next = root
		root = cur
		cur = next
	}
	return root
}

function ListNode(val, next) {
	this.val = val || null
	this.next = next || null
}

function creatList() {
	let arr = [1, 2, 3, 4, 5, null]
	let head
	let root = (head = new ListNode())

	arr.map((item) => {
		let node = new ListNode(item, null)
		root.next = node
		root = node
	})
	return head.next
}
let listNode = creatList()
console.log(listNode)

let c = reverseList(listNode)
console.log(c)
