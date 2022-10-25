function lengthOfLongestSubstring(s) {
	if (!s) return 0

	let subStr = ""
	let max = 0
	let start = 0
	for (let i = 0; i < s.length; i++) {
		let index = subStr.indexOf(s[i])
		if (index > 0) {
			start = start + index + 1
		}
		subStr = s.slice(start, i + 1)
		max = Math.max(max, i - start)
	}
	return max
}

console.log(lengthOfLongestSubstring("adfafwefffdasdcx"))
