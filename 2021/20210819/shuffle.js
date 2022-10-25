function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex = Math.round(Math.random() * (arr.length - 1 - i)) + i
		;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
	}
	return arr
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(shuffle(arr))
