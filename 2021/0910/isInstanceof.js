
function isInstanceof (A,B){
    let left = Object.getPrototypeOf(A)
    let right = B.prototype
    while (true){
        if(!left) return false
        if(left===right){
            return true
        }
        left = Object.getPrototypeOf(left)
    }
}