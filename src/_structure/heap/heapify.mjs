/**
 * 最大堆化函数，将以 index 为根的子树调整为最大堆
 * @param {number[]} arr - 待堆化的数组
 * @param {number} n - 数组的长度
 * @param {number} index - 当前需要调整的节点索引
 */
function maxHeapify(arr, n, index) {
  let largest = index // 初始化最大值的索引为当前节点
  const left = 2 * index + 1 // 左子节点的索引
  const right = 2 * index + 2 // 右子节点的索引

  // 如果左子节点存在且大于当前最大值
  if (left < n && arr[left] > arr[largest]) {
    largest = left
  }

  // 如果右子节点存在且大于当前最大值
  if (right < n && arr[right] > arr[largest]) {
    largest = right
  }

  // 如果最大值不是当前节点，则交换并继续调整
  if (largest !== index) {
    ;[arr[index], arr[largest]] = [arr[largest], arr[index]]
    maxHeapify(arr, n, largest)
  }
}

/**
 * 将整个数组转换为最大堆
 * @param {number[]} arr - 待堆化的数组
 */
export function buildMaxHeap(arr) {
  const n = arr.length
  // 从最后一个非叶子节点开始，自底向上进行堆化
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeapify(arr, n, i)
  }
  return arr
}

/**
 * 最小堆化函数，将以 index 为根的子树调整为最小堆
 * @param {number[]} arr - 待堆化的数组
 * @param {number} n - 数组的长度
 * @param {number} index - 当前需要调整的节点索引
 */
function minHeapify(arr, n, index) {
  let smallest = index // 初始化最小值的索引为当前节点
  const left = 2 * index + 1 // 左子节点的索引
  const right = 2 * index + 2 // 右子节点的索引

  // 如果左子节点存在且小于当前最小值
  if (left < n && arr[left] < arr[smallest]) {
    smallest = left
  }

  // 如果右子节点存在且小于当前最小值
  if (right < n && arr[right] < arr[smallest]) {
    smallest = right
  }

  // 如果最小值不是当前节点，则交换并继续调整
  if (smallest !== index) {
    ;[arr[index], arr[smallest]] = [arr[smallest], arr[index]]
    minHeapify(arr, n, smallest)
  }
}

/**
 * 将整个数组转换为最小堆
 * @param {number[]} arr - 待堆化的数组
 */
export function buildMinHeap(arr) {
  const n = arr.length
  // 从最后一个非叶子节点开始，自底向上进行堆化
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    minHeapify(arr, n, i)
  }
  return arr
}
