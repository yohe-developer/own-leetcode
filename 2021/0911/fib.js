/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
	if (n < 2) return n
	return fib(n - 1) + fib(n - 2)
}

const fib1 = function (n) {
	const MOD = 1000000007
	if (n < 2) return n
	let a = 0
	let b = 1

	for (let i = 1; i < n; i++) {
		let c = (a + b) % MOD
		a = b
		b = c
	}
	return b
}

// console.log(fib(45))

console.log(fib1(45))
