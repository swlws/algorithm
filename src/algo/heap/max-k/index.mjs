import MinHeap from '../../../_structure/heap/min-heap.mjs'

/**
 * 找到第K大的元素
 * @param {*} nums
 * @param {*} k
 */
function findMaxK(nums, k) {
  const minHeap = new MinHeap()
  for (let i = 0; i < nums.length; i++) {
    minHeap.insert(nums[i])
    if (minHeap.size() > k) {
      minHeap.extractMin()
    }
  }
  console.log('heap\t', minHeap.heap)
  return minHeap.peek()
}

const result = findMaxK([1, 3, -1, -3, 5, 3, 6, 7], 3)
console.log('result\t', result)
