/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
	
let start = 0
let end = nums.length - 1
while (start <= end) {
    let _a = Math.pow(nums[start], 2)
    let _b = Math.pow(nums[end], 2)
    if(_a>_b){
        nums.splice(end,0,_a)
        start++
    }else{
        nums[end] = _b
    }
    end--

}
return nums
// @lc code=end

console.log(sortedSquares([-4,-1,0,3,10]));

