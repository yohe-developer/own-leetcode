/**
 * http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key
 * @param url
 * @constructor
 */
function uRLSearchParams(url){
    let arr = url.split('?')[1].split('#')[0].split('&')
    let result = {}
    arr.map(item=>{
        let [key,value] = item.split('=')
        if(Array.isArray( result[key])){
            result[key].push(value)
        }else if(result[key]){
            result[key] = [ result[key], value]
        }else{
            result[key] = value
        }
    })

    console.log(result)
}

uRLSearchParams('http://www.nowcoder.com?key=1&key=2&key=3&test=4#hehe key')