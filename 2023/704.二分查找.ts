/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {

  let start = 0
  let end = nums.length

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let value = nums[mid]
    if (value === target) {
      return mid
    } else if (value > target) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
};
// @lc code=end


search([0, 1, 0], 1)