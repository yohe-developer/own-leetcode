Function.prototype.bind = function (context, ...args) {
	context = Object(context) || globalThis
	let fn = this
	function F(...arg) {
		let newArg = args.concat(arg)
		return fn.call(this instanceof F ? this : context, ...newArg)
	}
	if (this.prototype) {
		F.prototype = Object.create(this.prototype)
	}

	return F
}

function test() {}

test.bind({}, 123)
