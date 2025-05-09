/**
 * 最大子数组和
 *     状态转移方程：f(i) = max(f(i-1) + nums[i], nums[i])
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0
  // 当前最大子数组和
  let currentMax = nums[0]
  // 全局最大子数组和
  let globalMax = nums[0]

  for (let i = 1; i < nums.length; i++) {
    // 更新当前最大子数组和，要么是当前元素本身，要么是当前元素加上之前的最大子数组和
    currentMax = Math.max(nums[i], currentMax + nums[i])
    // 更新全局最大子数组和
    globalMax = Math.max(globalMax, currentMax)
  }

  return globalMax
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6
console.log(maxSubArray([5, 4, -1, 7, 8])) // 23
