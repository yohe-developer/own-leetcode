/**
 * Created by aio on 2023/2/24 09:53
 */
function missingNumber(nums: number[]): number {

    let start = 0
    let end = nums.length

    while (start< end){
        let mid = Math.floor((start+end)/2)

        if(mid != nums[mid]){
            end = mid
        }else {
            start = mid+1
        }
    }
    return start
}

console.log(missingNumber([0,2]))//[0, 1, 2, 3, 4, 5, 6, 7, 9]))//[0, 1, 2, 3, 4, 5, 6, 7, 9]))
