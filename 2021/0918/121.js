/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
	let value = prices[0]
	let max = 0
	for (let i = 1; i < prices.length; i++) {
		if (prices[i] - value > 0) {
			max = Math.max(max, prices[i] - value)
		} else {
			value = prices[i]
		}
	}
	return max
}
