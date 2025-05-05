class MaxHeap {
  constructor() {
    // 用数组存储堆元素
    this.heap = []
  }

  static fromArray(arr) {
    const heap = new MaxHeap()
    for (const item of arr) {
      heap.insert(item)
    }
    return heap
  }

  // 获取父节点的索引
  getParentIndex(index) {
    return Math.floor((index - 1) / 2)
  }

  // 获取左子节点的索引
  getLeftChildIndex(index) {
    return 2 * index + 1
  }

  // 获取右子节点的索引
  getRightChildIndex(index) {
    return 2 * index + 2
  }

  // 交换数组中两个元素的位置
  swap(i, j) {
    ;[this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // 上浮操作，维护最大堆性质
  siftUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index)
      // 当父节点的值小于当前节点的值时，交换它们
      if (this.heap[parentIndex] >= this.heap[index]) break
      this.swap(parentIndex, index)
      index = parentIndex
    }
  }

  // 下沉操作，维护最大堆性质
  siftDown(index) {
    const heapSize = this.heap.length
    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index)
      const rightChildIndex = this.getRightChildIndex(index)
      let largestIndex = index

      if (
        leftChildIndex < heapSize &&
        this.heap[leftChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = leftChildIndex
      }

      if (
        rightChildIndex < heapSize &&
        this.heap[rightChildIndex] > this.heap[largestIndex]
      ) {
        largestIndex = rightChildIndex
      }

      if (largestIndex === index) break
      this.swap(index, largestIndex)
      index = largestIndex
    }
  }

  // 插入元素到堆中
  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1)
  }

  // 删除并返回堆顶元素
  extractMax() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const max = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return max
  }

  // 获取堆顶元素
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  // 获取堆的大小
  size() {
    return this.heap.length
  }

  // 判断堆是否为空
  isEmpty() {
    return this.heap.length === 0
  }
}

export default MaxHeap
