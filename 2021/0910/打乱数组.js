function randomArray(arr) {
	let len = arr.length

	while (len > 0) {
		let index = Math.floor(Math.random() * len--)
		;[arr[len], arr[index]] = [arr[index], arr[len]]
	}
	return arrs
}

randomArray([1, 2, 3, 4, 5])
