var F = function () {};
Object.prototype.a = function () {
    console.log("yideng");
};
Function.prototype.b = function () {
    console.log("xuetang");
};
var f = new F();
console.log(F.__proto__===Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(f.__proto__ === F.prototype)
console.log(F.prototype.__proto__===Object.prototype)
F.a();
F.b();
f.a();
f.b();