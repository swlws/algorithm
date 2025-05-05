/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const n = nums.length
  // 若数组为空或窗口大小为 0，直接返回空数组
  if (n === 0 || k === 0) return []

  const result = []
  // 单调递减队列，存储数组元素的索引
  const deque = []

  for (let i = 0; i < n; i++) {
    // 若队列头部元素超出当前窗口范围，将其移除
    if (deque.length > 0 && deque[0] <= i - k) {
      deque.shift()
    }

    // 维护队列的单调递减性，若队列尾部元素小于当前元素，将其移除
    while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }

    // 将当前元素的索引加入队列尾部
    deque.push(i)

    // 当窗口覆盖元素达到 k 个时，将队列头部元素（当前窗口最大值）加入结果数组
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }

  return result
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
