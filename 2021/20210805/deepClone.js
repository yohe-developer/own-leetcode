let cache = new Map()
function deepClone(obj) {
	console.log(typeof obj)
	if (obj === null) return null
	if (cache.has(obj)) return cache.get(obj)
	if (typeof obj === 'object') {
		let result = null
		result = Array.isArray(obj) ? [] : {}
		cache.set(obj, result)
		for (const key in obj) {
			if (Object.hasOwnProperty.call(obj, key)) {
				result[key] = deepClone(obj[key])
			}
		}
		return result
	}

	return obj
}
let a = {
	b: 1,
	c: {
		f: function () {},
		e: null,
		d: 123,
	},
}

console.log(deepClone(a))
