/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let l = 0,
    r = num,
    ans = -1
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)
    if (mid * mid === num) {
      return true
    } else if (mid * mid < num) {
      ans = mid
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  return false
}
