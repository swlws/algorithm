/**
 * 选择排序
 * 原理：
 * 1. 遍历数组，找到最小的元素，将其与第一个元素交换
 * 2. 遍历数组，找到第二小的元素，将其与第二个元素交换
 * 3. 以此类推
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 *
 * @param {*} arr
 * @returns
 */
function selectionSort(arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }
  return arr
}

const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9]
console.log('selectionSort', selectionSort(arr))
