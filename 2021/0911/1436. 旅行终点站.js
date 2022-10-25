/**
 * @param {string[][]} paths
 * @return {string}
 * 输入：paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
 输出："Sao Paulo"
 解释：从 "London" 出发，最后抵达终点站 "Sao Paulo" 。本次旅行的路线是 "London" -> "New York" -> "Lima" -> "Sao Paulo" 。

 */
function destCity(paths) {
	let map = new Set()

	for (const [a, b] of paths) {
		map.add(a)
	}
	for (const [a, b] of paths) {
		if (!map.has(b)) return b
	}
}
console.log(
	destCity([
		["B", "C"],
		["D", "B"],
		["C", "A"]
	])
)
