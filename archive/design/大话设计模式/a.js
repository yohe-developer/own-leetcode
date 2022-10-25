"use strict"
var __decorate =
	(this && this.__decorate) ||
	function (decorators, target, key, desc) {
		var c = arguments.length,
			r =
				c < 3
					? target
					: desc === null
					? (desc = Object.getOwnPropertyDescriptor(target, key))
					: desc,
			d
		if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
			r = Reflect.decorate(decorators, target, key, desc)
		else
			for (var i = decorators.length - 1; i >= 0; i--)
				if ((d = decorators[i]))
					r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
		return c > 3 && r && Object.defineProperty(target, key, r), r
	}
let Greeter = class Greeter {
	constructor(message) {
		this.greeting = message
	}
	greet() {
		return "Hello, " + this.greeting
	}
}
Greeter = __decorate([sealed], Greeter)
function sealed(constructor) {
	console.log(123)
	Object.seal(constructor)
	Object.seal(constructor.prototype)
}
const x = new Greeter("nihao")
console.log(x.greet())
const m = new Set()
m.add(1)
m.add(2)
for (const _item of m) {
	console.log(_item)
}
