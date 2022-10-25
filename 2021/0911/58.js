/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 * 输入: s = "abcdefg", k = 2
 输出: "cdefgab"
 */
var reverseLeftWords = function (s, n) {
	let count = 0
	while (count <= n) {
		s += s[count++]
	}
	return s.slice(n)
}
function reverseLeftWords1(s, n) {
	let t = ""
	for (let i = n; i < n + s.length; i++) {
		t += s.charAt([i % s.length])
	}
	return t
}
let s =
	"yvjfhebhdvgqhlddkadceojazrxegpolllrthcjlbovbhlagkoumnotecmogwfcfkxiokiyanknvbywihhfgprvqdwpdmvjbhbdd"
let n = 35
console.log(reverseLeftWords1(s, n))
