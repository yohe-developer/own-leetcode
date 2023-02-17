/*
 * @lc app=leetcode.cn id=744 lang=typescript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
function nextGreatestLetter(letters: string[], target: string): string {
    
    let start = 0
    let end = letters.length -1
    if(letters[end]<= target) return letters[0]
    while(start < end){
        let mid = Math.floor((start+end)/2)

        if(letters[mid]> target){
            end = mid
        }else{
            start = mid+1
        }

    }
    return letters[start]
};
// @lc code=end

console.log(nextGreatestLetter(["c","f","j"], 'j'));

