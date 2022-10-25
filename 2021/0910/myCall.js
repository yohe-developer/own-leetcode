Function.prototype.call = function (target, ...args) {
	if (!(this instanceof Function)) {
		throw "err"
	}
	target = Object(target) || globalThis
	let sy = Symbol()
	target[sy] = this
	let result = target[sy](...args)
	delete target[sy]
	return result
}

function test() {}

let obj = {}
test.call()
