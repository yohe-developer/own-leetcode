/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	let result = [s]
	let help = function (s, n) {
		if (n === s.length) return
		if (!isNaN(s[n])) return help(s, n + 1)
		help(s, n + 1)
		if (s[n].toLowerCase() === s[n]) {
			s = s.slice(0, n) + s[n].toUpperCase() + s.slice(n + 1)
		} else {
			s = s.slice(0, n) + s[n].toLowerCase() + s.slice(n + 1)
		}
		result.push(s)
		help(s, n + 1)
	}
	help(s, 0)
	return result
}

console.log(letterCasePermutation("a1b2"))
