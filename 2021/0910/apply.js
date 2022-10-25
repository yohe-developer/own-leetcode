Function.prototype.apply = function (context, arg) {
	if (!Array.isArray(arg)) {
		throw "err"
	}
	context = Object(context) || globalThis
	let sy = Symbol()
	context[sy] = this
	let result = null
	if (arg.length === 0) {
		result = context[sy]()
	} else {
		result = context[sy](...arg)
	}
	delete context[sy]
	return result
}

function show(arr) {
	console.log(this.a)
}
let o = {
	a: [1, 2, 3]
}

show.apply(o, [1])
