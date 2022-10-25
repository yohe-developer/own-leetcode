

function deepClone(obj, map = new WeakMap()){
        if(obj===null) return obj
        if(typeof obj !== 'object') return obj
        if(map.has(obj)) return map.get(obj)
        if(obj instanceof Function){
            return obj
        }
        if(Array.isArray(obj) || Object.prototype.toString.call(obj)==='[object Object]'){
            let result = new obj.constructor
            map.set(obj, result)
            Object.keys(obj).map(item=>{
                result[item] = deepClone(obj[item])
            })
            return result
        }
}

let a = deepClone({a:1})
console.log(a)


function deepClone1(obj) {

    let result = {}
    let map = new WeakMap()
    let stack = [{
        parent: result,
        key: null,
        data: obj
    }]
    while (stack.length) {
        let {parent, key, data} = stack.pop()

        let res = parent
        if (key !== null) {
            res = parent[key] = new data.constructor
        }
        if(map.has(data)){
            res = map.get(data)
            continue
        }
        map.set(data, res)

        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'object') {
                stack.push({
                    key: key,
                    parent: res,
                    data: data[key]
                })
            } else {
                res[key] = (data[key])
            }
        })
    }

    return result
}
console.log(deepClone({
    a:1,
        b:2,
    f:{
        e:123
    },
    c:[1,2,{d:1},4]
}))