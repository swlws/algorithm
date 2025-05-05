/**
 * 优先队列（Priority Queue）是一种特殊的队列
 * 基于优先队列，实现最大堆和最小堆
 */
class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    // 存储队列元素的数组，使用数组模拟堆结构
    this.heap = []
    // 比较函数，用于确定元素优先级
    this.comparator = comparator
  }

  /**
   * 获取队列中元素的数量
   * @returns {number} - 队列的大小
   */
  size() {
    return this.heap.length
  }

  /**
   * 判断队列是否为空
   * @returns {boolean} - 若队列为空，返回 true；否则返回 false
   */
  isEmpty() {
    return this.size() === 0
  }

  /**
   * 获取队列中优先级最高的元素，但不移除
   * @returns {any|null} - 若队列不为空，返回优先级最高的元素；若队列为空，返回 null
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.heap[0]
  }

  /**
   * 向队列中插入一个元素，插入后调整堆结构
   * @param {any} value - 要插入的元素
   */
  enqueue(value) {
    this.heap.push(value)
    this._siftUp()
  }

  /**
   * 移除并返回队列中优先级最高的元素，移除后调整堆结构
   * @returns {any|null} - 若队列不为空，返回优先级最高的元素；若队列为空，返回 null
   */
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    const top = this.heap[0]
    const last = this.heap.pop()
    if (!this.isEmpty()) {
      this.heap[0] = last
      this._siftDown()
    }
    return top
  }

  /**
   * 向上调整堆，确保堆的性质，使新插入元素找到合适位置
   */
  _siftUp() {
    let nodeIndex = this.size() - 1
    while (nodeIndex > 0) {
      const parentIndex = Math.floor((nodeIndex - 1) / 2)
      // 如果父节点优先级更高，停止调整
      if (this.comparator(this.heap[parentIndex], this.heap[nodeIndex])) {
        break
      }
      this._swap(nodeIndex, parentIndex)
      nodeIndex = parentIndex
    }
  }

  /**
   * 向下调整堆，确保堆的性质，使堆顶元素找到合适位置
   */
  _siftDown() {
    let nodeIndex = 0
    const lastIndex = this.size() - 1
    while (true) {
      const leftChildIndex = 2 * nodeIndex + 1
      const rightChildIndex = 2 * nodeIndex + 2
      let largerChildIndex = nodeIndex
      if (
        leftChildIndex <= lastIndex &&
        this.comparator(this.heap[leftChildIndex], this.heap[largerChildIndex])
      ) {
        largerChildIndex = leftChildIndex
      }

      if (
        rightChildIndex <= lastIndex &&
        this.comparator(this.heap[rightChildIndex], this.heap[largerChildIndex])
      ) {
        largerChildIndex = rightChildIndex
      }

      if (largerChildIndex === nodeIndex) {
        break
      }
      this._swap(nodeIndex, largerChildIndex)
      nodeIndex = largerChildIndex
    }
  }

  /**
   * 交换数组中两个元素的位置
   * @param {number} index1 - 第一个元素的索引
   * @param {number} index2 - 第二个元素的索引
   */
  _swap(index1, index2) {
    ;[this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]
  }
}

export { PriorityQueue }

const list = [44, 35, 26, 31, 33, 14, 10, 19, 42, 27]
const pq = new PriorityQueue()

list.forEach((item) => {
  pq.enqueue(item)
})
console.log(pq.heap)
