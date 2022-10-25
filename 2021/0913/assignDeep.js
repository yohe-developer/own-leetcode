function assignDeep(obj1, obj2) {
	let result = {}

	let keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])]

	keys.map((key) => {
		if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
			result[key] = assignDeep(obj1[key], obj2[key])
		} else {
			result[key] = obj2[key] || obj1[key]
		}
	})
	return result
}

let a = {
	a: 1,
	b: {
		d: 4
	}
}

let b = {
	a: 2,
	b: {
		d: 6,
		f: [12, 3]
	}
}

console.log(assignDeep({}, b))
