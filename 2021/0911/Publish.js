class Publish {
	constructor(props) {
		this.subjects = {}
	}

	onEvent(type, callback) {
		let callbacks = this.subjects[type] || []
		this.subjects[type] = callbacks.push(callback)
	}
	offEvent(type) {
		delete this.subjects[type]
	}
	publish(type) {
		this.subjects[type] &&
			this.subjects[type].map((item) => {
				item()
			})
	}
}
