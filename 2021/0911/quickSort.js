function quickSort(arr) {
	if (arr.length < 2) return arr
	let mid = Math.floor(arr.length / 2)

	let left = []
	let right = []
	let value = arr.splice(mid, 1)[0]
	for (const arrElement of arr) {
		arrElement > value ? right.push(arrElement) : left.push(arrElement)
	}
	return [...quickSort(left), value, ...quickSort(right)]
}

console.log(quickSort([1, 6, 2, 0, 9, 5, 4]))
