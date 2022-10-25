
function namespace(obj, str){
    let arr = str.split('.')
    let result = obj

    for (const ele of arr) {
        if(ele in result){
            if(typeof result[ele] !== 'object'){
                result[ele] = {}
            }
        }else{
            result[ele] = {}
        }
        result = result[ele]

    }

    console.log(obj)
}

let a = {
    a: {
        test: 1,
        b: {
            c: {
                d: {}
            }
        }
    }
}
console.log(namespace({a: {test: 1, b: 2}}, 'a.b.c.d'))

