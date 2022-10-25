/**
 * @param {number[]} nums
 * @return {number}
 */
const partitionDisjoint = function(nums) {

    let max= nums[0]
    let leftMax = nums[0]
    let index = 0

    for (let i = 1; i < nums.length; i++) {
        if(nums[i]< leftMax){
            index = i
            leftMax = max
        }else{
            max = Math.max(max, nums[i])
        }
    }
    return index+1
};

console.log(partitionDisjoint([5,0,3,8,6]))
