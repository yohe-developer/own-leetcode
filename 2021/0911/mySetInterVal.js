// 1.写一个 mySetInterVal(fn, a, b),
// 每次间隔 a, a + b, a + 2b 的时间，
// 然后写一个 myClear，停止上面的 mySetInterVal

function mySetInterVal(fn, a, b) {
	let count = 0
	let time = a + b * count
	let timer = null
	function start() {
		timer = setTimeout(() => {
			fn(count)
			count++
			time = a + b * count
			start()
		}, time)
	}
	function myClear() {
		clearTimeout(timer)
	}

	start()
	return myClear
}

let clear = mySetInterVal(
	function (count) {
		if (count === 20) {
			clear()
		}
		console.log(count)
	},
	1000,
	1000
)
