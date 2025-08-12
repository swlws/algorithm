/**
 * 插入排序
 * 原理：
 * 1. 遍历数组，将每个元素插入到已排序的数组中
 * 2. 插入时，从后往前遍历已排序的数组，找到合适的位置插入
 * 3. 以此类推
 *
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 *
 * @param {*} arr
 * @returns
 */
function insertionSort(arr) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    const value = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > value) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = value
  }

  return arr
}

const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9]
console.log('insertionSort', insertionSort(arr))
