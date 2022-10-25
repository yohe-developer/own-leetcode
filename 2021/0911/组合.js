// ['a', 'b'], ['A', 'B'], ['1', '0']，
// 输出['aA1', 'aA0', 'aB1', 'aB0', 'bA1', 'bA0', 'bB1', 'bB0']

function fn(arr) {
	return arr.reduce((a, b) =>
		a.map((_a) => b.map((_b) => _a + _b).flat(Infinity)).flat(Infinity)
	)
}

console.log(
	fn([
		["a", "b"],
		["A", "B"],
		["1", "0"]
	])
)
