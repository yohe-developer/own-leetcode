function search(nums: number[], target: number): number {
  const temp: Record<string, number> = {};
  for (const value of nums) {
    temp[value] = ~~temp[value] + 1;
  }
  return temp[target] === undefined ? 0: temp[target];
}

console.log(search([5, 7, 7, 8, 8, 10], 8));
