// let format = (n) => {
// 	let num = n.toString() // 转成字符串
// 	let decimals = ""
// 	// 判断是否有小数
// 	num.indexOf(".") > -1 ? (decimals = num.split(".")[1]) : decimals
// 	let len = num.length
// 	if (len <= 3) {
// 		return num
// 	} else {
// 		let temp = ""
// 		let remainder = len % 3
// 		decimals ? (temp = "." + decimals) : temp
// 		if (remainder > 0) {
// 			// 不是3的整数倍
// 			return (
// 				num.slice(0, remainder) +
// 				"," +
// 				num.slice(remainder, len).match(/\d{3}/g).join(",") +
// 				temp
// 			)
// 		} else {
// 			// 是3的整数倍
// 			return num.slice(0, len).match(/\d{3}/g).join(",") + temp
// 		}
// 	}
// }

function format(num) {
	let strNum = num.toString()
	let decimals = strNum.includes(".") ? strNum.split(".")[1] : null
	let remainder = strNum.split(".")[0]
	let result = []
	while (remainder) {
		let temp = remainder % 1000
		result.unshift(temp)
		remainder = Math.floor(remainder / 1000)
	}
	return result.join(",") + (decimals ? "." + decimals : "")
}
format(12323) // '12,323.33'
console.log(format(12323))
