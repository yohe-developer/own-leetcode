/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
	let arr = Array.from({ length: 26 }, () => 0)
	for (const magazineElement of magazine) {
		let index = magazineElement.charCodeAt(0) - "a".charCodeAt(0)
		arr[index]++
	}
	for (const ransomNoteElement of ransomNote) {
		let index = ransomNoteElement.charCodeAt(0) - "a".charCodeAt(0)
		if (arr[index] === 0) return false
		arr[index]--
	}
	return true
}

console.log(canConstruct("aa", "aab"))
