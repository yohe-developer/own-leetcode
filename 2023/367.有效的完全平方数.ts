/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {

  let start = 0
  let end = num

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (mid * mid === num) {
      return true
    } else if(mid * mid > num) {
      end = mid -1
    } else if (mid * mid < num) {
      start = mid +1
    }
  }
  return false
};
// @lc code=end
