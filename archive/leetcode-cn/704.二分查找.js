"use strict";
/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */
// @lc code=start
function search(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        const mid = Math.floor((end + start) / 2);
        if (nums[mid] === target) {
            return nums[mid];
        }
        if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}
search([-1, 0, 3, 5, 9, 12], 9);
// @lc code=end
