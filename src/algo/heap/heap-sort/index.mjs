import MinHeap from '../../../_structure/heap/min-heap.mjs'
import MaxHeap from '../../../_structure/heap/max-heap.mjs'

/**
 * 堆排序 - 通过最小堆实现
 * @param {*} arr
 * @returns
 */
function heapSortViaMinHeap(arr) {
  const heap = MinHeap.fromArray(arr)
  const sortedArr = []
  while (heap.size() > 0) {
    sortedArr.push(heap.extractMin())
  }
  return sortedArr
}

/**
 * 堆排序 - 通过最大堆实现
 * @param {*} arr
 * @returns
 */
function heapSortViaMaxHeap(arr) {
  const heap = MaxHeap.fromArray(arr)
  const sortedArr = []
  while (heap.size() > 0) {
    sortedArr.push(heap.extractMax())
  }
  return sortedArr.reverse()
}

console.log('heapSortViaMinHeap: ', heapSortViaMinHeap([1, 3, 2, 4, 5]))
console.log('heapSortViaMaxHeap: ', heapSortViaMaxHeap([1, 3, 2, 4, 5]))
