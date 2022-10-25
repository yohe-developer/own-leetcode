
function myNew(fn, ...args){
    if(!(fn instanceof Function)){
        throw 'err'
    }
    let ctor = Object.create(fn.prototype)
    let result = fn.call(fn, ...args)

    let isObject = typeof result === 'object' && result!==null

    return isObject ? result : ctor

}