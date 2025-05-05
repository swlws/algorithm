import MinHeap from '../../../_structure/heap/min-heap.mjs'

function topK(arr, k) {
  const heap = MinHeap.fromArray(arr.slice(0, k))

  for (let i = k; i < arr.length; i++) {
    if (arr[i] > heap.peek()) {
      heap.extractMin()
      heap.insert(arr[i])
    }
  }

  return heap.heap
}

console.log(topK([1, 3, 2, 4, 5], 3))
