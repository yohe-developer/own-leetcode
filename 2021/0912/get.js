function get(obj, path, defaultValue) {
	let paths = path.split(".")
	let result = obj
	paths.map((item) => {
		result = result[item]
		if (!result) {
			result = defaultValue
		}
	})

	return result
}

let o = {
	a: 1,
	b: {
		c: 12
	}
}

get(o, "b.c", 13)
