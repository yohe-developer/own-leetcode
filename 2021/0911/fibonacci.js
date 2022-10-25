// function fibonacci(n) {
// 	if (n < 2) return n
// 	return fibonacci(n - 1) + fibonacci(n - 2)
// }
//
// console.log(fibonacci(12))

function fibonacci2(n, a, b) {
	if (n < 2) return b
	return fibonacci2(n - 1, b, a + b)
}

console.log(fibonacci2(12, 0, 1))
