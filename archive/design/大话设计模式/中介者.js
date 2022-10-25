"use strict"
class Mediator {}
class Colleage {
	constructor(mediator) {
		this.mediator = mediator
	}
}
class AMediator extends Mediator {
	constructor() {
		super()
	}
	// private cc2: ConColleage1
	set cc1(params) {
		this._cc1 = params
	}
	set cc2(params) {
		this._cc2 = params
	}
	send(message, colleage) {
		if (colleage === this._cc1) {
			this._cc2?.Notify(message)
		} else {
			this._cc1?.Notify(message)
		}
	}
}
class ConColleage1 extends Colleage {
	constructor(mediator) {
		super(mediator)
	}
	send(message) {
		this.mediator?.send(message, this)
	}
	Notify(str) {
		console.log("cc1收到消息：", str)
	}
}
class ConColleage2 extends Colleage {
	constructor(mediator) {
		super(mediator)
	}
	send(message) {
		this.mediator?.send(message, this)
	}
	Notify(str) {
		console.log("cc2收到消息：", str)
	}
}
let am = new AMediator()
let cc1 = new ConColleage1(am)
let cc2 = new ConColleage2(am)
am.cc1 = cc1
am.cc2 = cc2
cc1.send("cc1 吃饭了吗？")
cc2.send("cc2 没吃")
