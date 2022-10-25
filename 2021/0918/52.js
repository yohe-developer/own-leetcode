var getIntersectionNode = function (headA, headB) {
	let map = new Map()
	let temp = headA
	while (temp) {
		map.set(temp, temp)
		temp = temp.next
	}
	temp = headB
	while (temp) {
		if (map.has(temp)) {
			return temp
		}
		temp = temp.next
	}
	return null
}
