let arr = [1, 2, 4, 6, 8, 10]
function Arrchange(arr) {
	let proxy = new Proxy(arr, {
		set() {},
		get(arr, property) {
			if (property >= 0) {
				return arr[property]
			} else {
				return arr[arr.length + property * 1]
			}
		}
	})
	return proxy
}
let brr = new Arrchange(arr)
console.log(brr[-2])

function side(arr) {
	arr[0] = arr[2]
}
function a(a, b, c = 3) {
	c = 10
	side(arguments)
	return a + b + c
}

console.log(a(1, 2, 1))
