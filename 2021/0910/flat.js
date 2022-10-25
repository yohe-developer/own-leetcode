// 递归
Array.prototype.myFlat = function (num) {
	if (!Array.isArray(this)) {
		throw "err"
	}
	if (num <= 0) return this
	return this.reduce(
		(a, b) => a.concat(Array.isArray(b) ? b.myFlat(num - 1) : [b]),
		[]
	)
}

// 迭代
Array.prototype.myFlat1 = function (num) {
	if (!Array.isArray(this)) {
		throw "err"
	}
	let result = []
	let stack = [].concat(this)
	while (stack.length) {
		let item = null
		while (!(item = stack.shift())) {}
		if (Array.isArray(item) && num > 0) {
			stack.push(...item)
			num--
		} else {
			result.push(item)
		}
	}
	return result
}

console.log([1, 2, [3, 5, [6, 7, [8, 9]]]].myFlat1(1))

// 特殊操作
Array.prototype.myFlat2 = function () {
	return this.toString()
		.split(",")
		.map((item) => Number(item))
}
let a = [1, 2, [3, 5, [6, 7, [8, 9]]]].myFlat2()
console.log(a)
