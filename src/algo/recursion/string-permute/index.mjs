function getAll(arr, rt = [], path = []) {
  if (arr.length === 0) {
    rt.push([...path])
    return
  }

  for (let i = 0; i < arr.length; i++) {
    path.push(arr[i])
    getAll(arr.slice(i + 1), rt, path)
    path.pop()
  }
}

let arr = [1, 2, 3]
let rt = []
getAll(arr, rt)
console.log(rt)

/**
 * 数字全排列
 *     使用回溯算法，遍历所有可能的排列组合
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const path = []

  const fn = () => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      path.push(nums[i])
      fn()
      path.pop()
    }
  }

  fn()

  return res
}

console.log(permute([1, 2, 3]))

/**
 * 字符串全排列
 *     使用回溯算法，遍历所有可能的排列组合
 * @param {*} string
 * @param {*} list
 * @param {*} rt
 * @returns
 */
function stringPermute(string, list = [], rt = []) {
  if (list.length === string.length) {
    rt.push(list.join(''))
    return list
  }

  for (let i = 0; i < string.length; i++) {
    if (list.includes(string[i])) continue
    list.push(string[i])
    stringPermute(string, list, rt)
    list.pop()
  }
}

const result = []
stringPermute('12345', [], result)
console.log(result)
console.log(result.length)

/**
 * 全排列的数量 - 等于阶乘的值
 * @param {*} n
 * @returns
 */
function countPermute(n) {
  if (n === 1) return 1
  return n * countPermute(n - 1)
}
console.log('countPermute(5)', countPermute(5))
