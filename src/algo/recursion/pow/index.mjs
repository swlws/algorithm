/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 处理 n 为负数的情况
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  // 递归计算快速幂
  function fastPow(x, n) {
    if (n === 0) return 1
    // 递归计算 x^(n/2)
    const half = fastPow(x, Math.floor(n / 2))
    if (n % 2 === 0) {
      // n 为偶数，x^n = (x^(n/2))^2
      return half * half
    } else {
      // n 为奇数，x^n = (x^(n/2))^2 * x
      return half * half * x
    }
  }
  return fastPow(x, n)
}

console.log('myPow', myPow(2, 10))
