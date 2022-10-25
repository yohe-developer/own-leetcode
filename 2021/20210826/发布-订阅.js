class Pub {
	constructor() {
		this.pubLsit = new Map()
	}

	on(key, callback) {
		if (this.pubLsit.has(key)) {
			this.pubLsit.get(key).push(callback)
		} else {
			this.pubLsit.set(key, [callback])
		}
	}

	emit(key, ...args) {
		if (this.pubLsit.has(key)) {
			this.pubLsit.get(key).forEach((item) => item(key, ...args))
		}
	}
}

let p = new Pub()

p.on("message", (topic, args) => {
	console.log(`类型是${topic}, 参数是：`, args)
})

p.on("hh", (topic, args) => {
	console.log(`类型是${topic}, 参数是：`, args)
})
p.emit("message", 123)
