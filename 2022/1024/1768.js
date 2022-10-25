/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ""
    let index= 0
    while(true){
        const a = word1.charAt(index)
        const b = word2.charAt(index)
        if(a){
            result += a
        }
        if(b){
            result +=b
        }
        index++
        if(!a && !b){
            break
        }
    }
    return result
};
