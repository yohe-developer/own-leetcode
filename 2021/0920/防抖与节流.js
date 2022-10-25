// 京程一灯，每日一题
const debounce = (fn, delay) => {
    // 介绍防抖函数原理，并实现
    //
    // your code
    let timer = null
    return function (...args){
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.call(this, ...args)
            timer = null
        }, delay)
    }
};
const throttle = (fn, delay = 500) => {
    // 介绍节流函数原理，并实现
    // your code
};