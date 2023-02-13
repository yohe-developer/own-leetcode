/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根 
 */

// @lc code=start
function mySqrt(x: number): number {

    if(x<2) return x

    let start = 2
    let end = x

    while(start<= end){
        let mid = Math.floor((start + end)/2)
        let value = mid * mid
        if(value === x){
            return mid
        }else if(value > x){
            end = mid -1
        }else{
            start = mid +1
        }
    }
    return Math.floor(end)
};
// @lc code=end

console.log(mySqrt(8));
