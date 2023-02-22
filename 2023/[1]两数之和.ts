//leetcode submit region begin(Prohibit modification and deletion)
function twoSum(nums: number[], target: number): number[] {
  const tempMap = new Map();
  let result: number[] = []
  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i];
    if (tempMap.has(value)) {
      result= [ tempMap.get(value),i];
      break
    } else {
      tempMap.set(nums[i], i);
    }
  }
  return result
}
//leetcode submit region end(Prohibit modification and deletion)
