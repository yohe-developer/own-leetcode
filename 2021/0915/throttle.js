function throttle(fn, time) {
	let startTime = new Date()
	let timer = null

	return function () {
		clearTimeout(timer)
		let endTime = new Date()
		let t = time - (startTime - endTime)
		if (t <= 0) {
			fn()
		} else {
			timer = setTimeout(() => {
				fn()
				timer = null
			}, time)
		}
	}
}
