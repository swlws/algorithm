/**
 * 平方根 - 使用循环实现，暴力破解
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let n = 0
  let preV = 0

  while (true) {
    const v = (n + 1) * (n + 1)
    if (x >= preV && x < v) {
      return n
    } else if (x === v) {
      return n + 1
    }
    preV = v
    n++
  }
}

console.log(mySqrt(4))
console.log(mySqrt(8))

/**
 * 平方根，使用二分查找实现
 * @param {*} x
 */
var mySqrt2 = function (x) {
  let l = 0,
    r = x,
    ans = -1
  while (l <= r) {
    let mid = l + (r - l) / 2
    if (mid * mid <= x) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return ans
}
