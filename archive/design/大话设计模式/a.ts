@sealed
class Greeter {
	greeting: string
	constructor(message: string) {
		this.greeting = message
	}
	greet() {
		return 'Hello, ' + this.greeting
	}
}

function sealed(constructor: any) {
	console.log(123)
	Object.seal(constructor)
	Object.seal(constructor.prototype)
}

const x = new Greeter('nihao')
console.log(x.greet())

const m = new Set()
m.add(1)
m.add(2)

for (const _item of m) {
	console.log(_item)
}
