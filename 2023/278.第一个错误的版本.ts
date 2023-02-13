/*
 * @lc app=leetcode.cn id=278 lang=typescript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let start = 0
        let end = n
        let mid = 0
        while(start <=end){
             mid = Math.floor((start + end)/2)
            if(isBadVersion(mid)){
                end  = mid-1
            }else{
                start = mid +1
            }
        }
        return start
    };
};
// @lc code=end

