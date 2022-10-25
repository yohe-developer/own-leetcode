// [1, 1, 2 , 3, 3, 3, 3, 4, 6, 6]，给定一个数 n，例如 3

function findMost(arr) {
	let map = {}
	let count = 0
	let max = 0
	for (const arrElement of arr) {
		let value = map[arrElement] || 1
		map[arrElement] = value + 1
		if (map[arrElement] > count) {
			count = map[arrElement]
			max = arrElement
		}
	}
	console.log(count)
	console.log(max)
	console.log(map)
}

let c = [1, 1, 2, 3, 3, 3, 4, 6, 6]

console.log(findMost(c, 3))
