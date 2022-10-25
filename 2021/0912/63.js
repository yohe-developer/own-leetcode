/**
 * @param {number[]} prices
 * @return {number}
 * 输入: [7,1,5,3,6,4]
 输出: 5
 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
 注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 */
var maxProfit = function (prices) {
	let dp = [0]
	let minValue = prices[0]
	for (let i = 1; i < prices.length; i++) {
		minValue = Math.min(minValue, prices[i])
		dp[i] = Math.max(prices[i] - minValue, dp[i - 1])
	}
	return dp.pop()
}

function maxProfit1(prices) {
	let minValue = prices[0]
	let maxValue = 0

	for (let i = 0; i < prices.length; i++) {
		minValue = Math.min(minValue, prices[i])
		maxValue = Math.max(prices[i] - minValue, maxValue)
	}
	return maxValue
}

maxProfit1([7, 1, 5, 3, 6, 4])
