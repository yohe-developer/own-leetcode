/*
 * @lc app=leetcode.cn id=1385 lang=typescript
 *
 * [1385] 两个数组间的距离值
 */

// @lc code=start
function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
  let result = 0
  for (const value1 of arr1) {
    let ok = true
    for (const value2 of arr2) {
      if (Math.abs(value1 - value2) <= d) {
        ok = false
        break
      }
    }
    ok && (result++)
  }
  return result
};
// @lc code=end


