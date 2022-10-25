
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let set = new Set()
    let max = -Infinity
    let min = Infinity
    for (const num of nums) {
        if(num===0) continue
        max = Math.max(max, num)
        min = Math.min(min, num)
        if(set.has(num)) return false
        set.add(num)
    }
    return max - min < 5
};