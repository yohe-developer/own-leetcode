/*
 * @lc app=leetcode.cn id=1539 lang=typescript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
function findKthPositive(arr: number[], k: number): number {

    let start = 0
    let end = arr.length -1

    while(start < end){
        let mid = Math.floor((start + end)/2)
        if(arr[mid]- mid < k){
            
        }
    }
};
// @lc code=end

