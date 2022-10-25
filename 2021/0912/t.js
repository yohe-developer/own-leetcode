function sumFN(arr) {
	arr.sort((n1, n2) => n2 - n1)
	let sum = arr.reduce((a, b) => a + b)

	let target = Math.ceil(sum / 3)
	console.log(target)

	let help = function () {
		let sum = 0

		let result = []
		let len = arr.length
		for (let i = 0; i < len; i++) {
			let item = arr[i]
			if (sum + item < target) {
				sum += item
				result.push(item)
				arr.splice(i, 1)
			}
		}

		return {
			sum,
			result
		}
	}
	return [
		help(),
		help(),
		{
			result: arr,
			sum: arr.reduce((a, b) => a + b)
		}
	]
}

var f = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]
//

f = [1, 1, 12, 12]
console.log(sumFN(f))

// 思想：排序+双端遍历 即可实现
function findPart(arr) {
	arr = arr.sort((a, b) => a - b)
	const sum = arr.reduce((pre, cur) => pre + cur, 0)
	const part = Math.floor(sum / 3)
	function getPart() {
		const tmp = []
		let i = 0,
			j = arr.length - 1
		while (i <= j) {
			let flag = false
			let tmpSum = tmp.reduce((pre, cur) => pre + cur, 0)
			if (tmpSum + arr[i] <= part) {
				flag = true
				tmp.push(arr[i])
				i++
			}
			if (tmpSum + arr[j] <= part) {
				flag = true
				tmp.push(arr[j])
				j++
			}
			if (!flag) {
				break
			}
		}
		arr = arr.slice(i, j - 1)
		return tmp
	}
	return [getPart(), getPart(), getPart()]
}

console.log(findPart(f))
