/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	return s
		.trim()
		.split(" ")
		.filter((item) => item !== "")
		.reverse()
		.join(" ")
}

function reverseWords1(s) {
	let result = null
	s.split(" ").map(
		(item) => item && (result = result === null ? item : item + " " + result)
	)
	return result
}
let str = "the sky is blue"
console.log(reverseWords1(str))
