/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let start = 0
  let end = nums.length
  let mid = 0
  while (start <= end) {
     mid = Math.floor((start + end) / 2)
    let value = nums[mid]
    if (value === target) {
      return mid
    } else if (value > target) {
      end = mid -1
    } else {
      start = mid +1
    }
  }
  return target> nums[mid] ? mid +1: mid
};
// @lc code=end


console.log(searchInsert([1, 3], 2));

