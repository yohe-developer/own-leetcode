/*
 * @lc app=leetcode.cn id=374 lang=typescript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */


function guessNumber(n: number): number {

  let start = 0
  let end = n

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let value = guess(mid)

    if (value === 0) return mid
    if (value < 0) {
      end = mid -1
    } else {
      start = mid +1
    }
  }
  return -1
};
// @lc code=end

