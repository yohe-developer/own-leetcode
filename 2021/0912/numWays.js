/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
	const MOD = 1000000007
	if (n < 3) return n
	let a = 1
	let b = 2

	for (let i = 2; i < n; i++) {
		let c = (a + b) % MOD
		a = b
		b = c
	}
	return b
}

console.log(numWays(7))
