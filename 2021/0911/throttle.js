function throttle(fn, time, isImmediate) {
	let timer = null
	return function (...args) {
		if (timer) return
		let self = this
		if (isImmediate) {
			timer = setTimeout(() => {
				timer = null
				isImmediate = false
			}, time)
			fn.call(self, ...args)
		} else {
			timer = setTimeout(() => {
				fn.call(self, ...args)
				clearTimeout(timer)
				timer = null
			}, time)
		}
	}
}

let b = throttle(
	() => {
		console.log(124)
	},
	3000,
	true
)

setInterval(b, 0)
