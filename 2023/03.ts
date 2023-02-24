/**
 * 
 * @param nums 
 * @returns 
 */
function findRepeatNumber(nums: number[]): number {
    const temp:any = {}
    for(let i = 0 ; i< nums.length; i++){
        if(!temp[nums[i]]){
            temp[nums[i]] = 0
        }
        temp[nums[i]] += 1;
        if(temp[nums[i]]>1){
            return nums[i]
        } 
    }
    return -1
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])