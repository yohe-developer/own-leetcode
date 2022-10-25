

function observe(obj){

    Object.keys(obj).forEach(key=>{
        let initValue = obj[key]
        if(typeof initValue === 'object') {
            observe(initValue)
            return
        }
        let dep = new Dep()
        Object.defineProperty(obj, key,{
            get(){
                if(Dep.Target){
                    dep.add()
                }
                return initValue
            },
            set(newValue){
                let isChange = initValue !== newValue
                initValue = newValue
                if(isChange){
                    dep.notify()
                }

            }
        })
    })
}

class Dep{
    static Target = null
    constructor() {

        this.deps = []
        this.depIds = new Set()
    }
    add(){
        if(this.depIds.has(Dep.Target.uid)) return
        this.depIds.add(Dep.Target.uid)
        this.deps.push(Dep.Target)
    }
    notify(){
        this.deps.forEach(value=>{
            value.update()
        })
    }
}

let uid = 0
class Watcher{
    constructor(obj, key , callback) {
        this.uid = uid++
        this.obj = obj
        this.key = key
        this.callback = callback
        this.value = this.get()
    }
    get(){
        Dep.Target = this
        let value = this.parseKey()
        Dep.Target = null
        return value
    }
    update(){
        let value = this.get()
        this.callback(value, this.value)
        this.value = value
    }
    parseKey(){
        let keys = this.key.split('.')
        let res = this.obj
        keys.map(key=>{
            res = res[key]
        })
        return res
    }

}

let o = {
    a:{
        c:1
    },
    b:2
}
observe(o)

new Watcher(o , 'a.c', function (){
    console.log(o.a.c)
})
o.a.c++
o.a.c++

