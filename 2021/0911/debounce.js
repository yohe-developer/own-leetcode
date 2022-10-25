function debounce(fn, time, immediate) {
	let timer = null

	return function (...args) {
		let result = null
		if (timer) clearTimeout(timer)
		let self = this
		timer = setTimeout(() => {
			result = fn.call(self, ...args)
			timer = null
		}, time)
		return result
	}
}
