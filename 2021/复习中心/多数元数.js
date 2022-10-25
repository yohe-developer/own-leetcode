function moreNum(arr) {
	let value = null
	let count = 0
	arr.map((item) => {
		if (count === 0) {
			value = item
		} else {
			count += value === item ? 1 : -1
		}
	})
	return value
}

console.log(moreNum([3, 2, 3, 2, 3]))
