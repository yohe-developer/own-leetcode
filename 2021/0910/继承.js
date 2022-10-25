

function Parent(name){
    this.name = name
}

function Child(...arg){
    Parent.call(this,...arg)
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child