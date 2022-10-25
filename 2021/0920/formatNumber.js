const str = "12345678";
function formatNumber(str) {
    // return Number(str).toLocaleString()
    let len = str.length
    let result = ""
    let count = 0
    while (len>0){
        len--
        count++
        let value = str[len]
        if(count===3&&len>0){
            value =  ',' + value
            count= 0
        }
        result = value+ result

    }
    return result
}
console.log(formatNumber(str)); //1,234,567,890
// 补充代码，使代码可以正确执行