function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				;[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
			}
		}
	}
	console.log(arr)
	return arr
}

insertionSort([1, 3, 0, 2, 9, 5, 7, 4, 3])
