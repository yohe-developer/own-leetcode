
/*
	给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效
  有效字符串需满⾜：
 	 	1. 左括号必须⽤相同类型的右括号闭合。
  	2. 左括号必须以正确的顺序闭合。
  注意空字符串可被认为是有效字符串。
  "()[]{}"
  （[)]
 */
function isValid(str){
    let i = 0
    let stack = []
    while (i< str.length){
        let value = str[i++]
        switch (value) {
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push("}")
                break
            default:
               if(value!== stack.pop()){
                   return false
               }
        }
    }
    return stack.length===0
}

console.log(isValid("([)]{}"))