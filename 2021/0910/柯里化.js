function curry(fn, ...args) {
	return function (...arg) {
		let newArg = args.concat(arg)
		if (arg.length === 0) {
			return fn(...newArg)
		} else {
			return curry(fn, ...newArg)
		}
	}
}

function add(a, b) {
	return a + b
}

let a = "123"

let b = curry(add)
let c = b(1)(2)(4)()
console.log(c)
