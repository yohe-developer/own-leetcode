
class Promise{
    constructor(executor) {
        this.promiseResult = null
        this.promiseStatus = 'pending'
        this.callbacks = []

       try {
           executor(_resolve.bind(this), _reject.bind(this))
       }catch (e) {
           _reject.call(this, e)
       }
       function _resolve(value){
            if(this.promiseStatus!=='pending') return
            this.promiseStatus = 'fulfilled'
            this.promiseResult = value
            this.callbacks.map(item=>setTimeout( ()=>item.onResolve()))
        }
       function _reject(value){
            if(this.promiseStatus!=='pending') return
            this.promiseStatus = 'rejected'
            this.promiseResult = value
            this.callbacks.map(item=> setTimeout(()=>item.onReject()))
        }
    }


    then(onResolve, onReject){
        return new Promise((resolve, reject)=>{
            if(typeof resolve !== 'function'){
                resolve = value=> value
            }
            if (typeof reject  !== 'function'){
                reject = error=> throw error
            }
            let self = this
            const help = function (fn){
                try {
                    let value =  fn(self.promiseResult)
                    if(value instanceof Promise){
                        value.then(res=> resolve(res), err=> reject(err))
                    }else{
                        resolve(value)
                    }
                }catch (e){
                    reject(e)
                }
            }
            if(this.promiseStatus==='fulfilled'){

                setTimeout(()=>help(onResolve))
            }else if(this.promiseStatus==='rejected'){
                setTimeout(()=>help(onReject))
            }else{
                this.callbacks.push({
                    onResolve: ()=> help(onResolve),
                    onReject: ()=> help(onReject)
                })
            }
        })

    }
    static resolve(value){
        return new Promise((resolve,reject)=>{
            if(value instanceof Promise || value.then){
                value.then(resolve,reject )
            }else{
                resolve(value)
            }
        })
    }
    catch(onReject){
        return this.then(null, onReject)
    }
    static reject (value){
        return new Promise((_, reject)=> {
            reject(value)
        })
    }
    static all(args){
        if(!Array.isArray(args)){
            throw 'err'
        }
        let result = new Map()
        return new Promise((resolve, reject)=>{
            for (const arg of args) {
                result.set(arg, null)
                Promise.resolve(arg).then(res=>{
                    count++
                    result.set(arg, res)
                }, err=>{
                    reject(err)
                }).finally(()=>{
                    if(count===args.length){
                       resolve(result.values())
                    }
                })
            }
        })

    }
}
// var thenable = { then: function(resolve) {
//         throw new TypeError("Throwing");
//         resolve("Resolving");
//     }};
// let a = Promise.resolve(thenable)
// console.log(a)
new Promise((resolve, reject)=>{
   setTimeout(()=>{
       resolve(12)
   },5000)
}).then(res=>{
      return 12
}, err=>{
    console.log(err)
}).then(res=>{
    console.log(res)
    throw 'err'
}).catch(err=>{
    console.log(err)
})
