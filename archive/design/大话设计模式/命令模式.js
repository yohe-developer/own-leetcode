"use strict";
class Barbecurer {
    bakeChicken() {
        console.log('烤鸡');
    }
    bakeMutton() {
        console.log('bakeMutton');
    }
}
class Command {
    constructor(bar) {
        this.receiver = bar;
    }
    excuteCommand() { }
}
class bakeMuttonCommand extends Command {
    constructor(bar) {
        super(bar);
    }
    excuteCommand() {
        this.receiver.bakeMutton();
    }
}
class bakeChickenCommand extends Command {
    constructor(bar) {
        super(bar);
    }
    excuteCommand() {
        this.receiver.bakeChicken();
    }
}
class Waiter {
    constructor() {
        this.orders = new Set();
    }
    setOrder(fun) {
        this.orders.add(fun);
    }
    cancelOrder(fun) {
        this.orders.delete(fun);
    }
    notify() {
        for (const order of this.orders) {
            order.excuteCommand();
        }
    }
}
const bar = new Barbecurer();
let mu1 = new bakeMuttonCommand(bar);
let bc = new bakeChickenCommand(bar);
const waiter = new Waiter();
waiter.setOrder(mu1);
waiter.setOrder(bc);
waiter.notify();
