/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var threeSum = function (nums, target) {
  // 首先对数组进行排序
  nums.sort((a, b) => a - b)

  const result = []
  const n = nums.length

  // 遍历数组
  for (let i = 0; i < n - 2; i++) {
    // 跳过重复元素
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = n - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum === target) {
        result.push([nums[i], nums[left], nums[right]])
        // 跳过重复元素
        while (left < right && nums[left] === nums[left + 1]) left++
        while (left < right && nums[right] === nums[right - 1]) right--
        left++
        right--
      } else if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }

  return result
}

const nums = [1, 1, 1, 2, -1, -4]
const target = 3
const result = threeSum(nums, target)
console.log(result)
