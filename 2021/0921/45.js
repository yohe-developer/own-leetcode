/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
    // 如果a+b>b+a  说明a>b
    nums.sort((a, b) =>""+a+b > ""+b+a ? 1 : -1)
    return nums.reduce((a,b)=> a+b, "")
};

console.log(minNumber([10,2]))