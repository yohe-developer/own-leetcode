/*
 * @lc app=leetcode.cn id=441 lang=typescript
 *
 * [441] 排列硬币
 */

// @lc code=start
function arrangeCoins(n: number): number {
    const sum = (num: number)=> num + num* (num-1)/2

    let start = 0
    let end = n
    while(start<end){
        let mid = Math.floor((start + end)/2)+1

        if(sum(mid)> n){
            end = mid-1
        }else{
            start = mid
        }
    }
    return start
};
// @lc code=end

console.log(arrangeCoins(8));
