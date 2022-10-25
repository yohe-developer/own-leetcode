let uid = 0
export default class Dep {
	constructor() {
		console.log('dep')
		this.subs = []
		this.id = uid++
	}
	addSub(sub) {
		this.subs.push(sub)
	}
	depend() {
		if (Dep.target) {
			this.addSub(Dep.target)
		}
	}
	notify() {
		console.log('notify')
		const subs = this.subs.slice()
		for (let i = 0, l = subs.length; i < l; i++) {
			subs[i].update()
		}
	}
}
