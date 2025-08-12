/**
 * 快速排序
 * 原理：
 * 1. 选择一个基准元素，将小于基准元素的元素放在基准元素的左边，大于基准元素的元素放在基准元素的右边
 * 2. 对基准元素的左边和右边分别递归调用快速排序
 * 3. 递归结束条件：数组长度为1
 *
 * 空间复杂度：O(nlogn)
 * 时间复杂度：O(n^2)
 *
 * @param {*} arr
 * @returns
 */
function quickSort(arr) {
  const len = arr.length
  if (len <= 1) return arr
  const value = arr[len - 1]
  const left = []
  const right = []
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] < value) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), value, ...quickSort(right)]
}

const arr = [1, 3, 2, 4, 5, 6, 7, 8, 9]
console.log(quickSort(arr))
