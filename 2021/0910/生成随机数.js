

function creatRandom(min, max){
   return Math.floor(Math.random()*(max-min)) + min
}

// (min, max]
const a = (min, max)=>Math.floor(Math.random()*(max+1-min)) + min-1
// [min, max)
const b = (min, max)=> Math.floor(Math.random()*(max - min)) + min
// [min, max]
const c = (min, max) => Math.floor(Math.random()*(max+1-min))+min
let count = 0
let time =  setInterval(()=>{
   console.log(a(3,5))
   if(count === 100){
      clearInterval(time)
   }
},500)