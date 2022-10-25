function isInt(num) {
	// return !num.includes('.')
	// return typeof num === "number" && num % 1 === 0
	// return Number.isInteger(num)
	return num === parseInt(num)
}
