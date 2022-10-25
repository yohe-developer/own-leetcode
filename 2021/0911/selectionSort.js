function selectionSort(arr) {
	let index = null
	for (let i = 0; i < arr.length; i++) {
		index = i
		for (let j = i; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				index = j
			}
		}
		;[arr[index], arr[i]] = [arr[i], arr[index]]
	}
	console.log(arr)
	return arr
}

selectionSort([1, 4, 2, 7, 0, 4])
