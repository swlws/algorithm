/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  // 通过位运算检查 n 是否为 2 的幂
  return (n & (n - 1)) === 0
}
