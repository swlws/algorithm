/**
 * 阶乘 - 递归
 * @param {*} n
 * @returns
 */
function factorial(n) {
  if (n < 0) {
    throw new Error('Negative numbers are not allowed')
  }
  if (n === 0 || n === 1) {
    return 1
  }
  return n * factorial(n - 1)
}

console.log('阶乘', factorial(10))

/**
 * 阶乘 - 动态规划
 * @param {*} n
 * @returns
 */
function factorialDP(n) {
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] * i
  }
  return dp[n]
}

console.log('阶乘DP', factorialDP(10))
