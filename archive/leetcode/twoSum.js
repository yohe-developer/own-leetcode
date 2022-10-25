"use strict";
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var myTwoSum;
(function (myTwoSum) {
    myTwoSum.twoSum = function name(nums, target) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            let num = target - nums[i];
            let a = map.get(num);
            if (a !== undefined) {
                return [a, i];
            }
            else {
                map.set(nums[i], i);
            }
        }
        return [];
    };
})(myTwoSum || (myTwoSum = {}));
console.log(myTwoSum.twoSum([2, 7, 11, 15], 9));
