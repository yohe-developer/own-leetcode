/**
 * @param {string} s
 * @return {boolean}
 * s = "()[]{}"
 */
var isValid = function (s) {
    if(!s || s.length %2 !== 0) return false
    let stack = []
    let len = 0
    while (len< s.length){
        let value = s[len++]

        switch (value) {
            case "(":
                stack.push(')')
                break
            case "[":
                stack.push(']')
                break
            case "{":
                stack.push('}')
                break
            default:
            if(value!==stack.pop()){
                return false
            }

        }
    }
    return stack.length===0
}

console.log(isValid("(("))