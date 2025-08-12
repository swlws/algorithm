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
