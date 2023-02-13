/*
 * @lc app=leetcode.cn id=852 lang=typescript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
function peakIndexInMountainArray(arr: number[]): number {

  let start = 0
  let end = arr.length
  
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    let value = arr[mid]
    if (value > arr[mid - 1] && value > arr[mid + 1]) {
      return mid
    } else if (value < arr[mid-1] && value > arr[mid + 1]) {
      end = mid -1
    } else {
      start  = mid +1
    }
  }
  return -1
};
// @lc code=end


peakIndexInMountainArray([0, 2, 1, 0])