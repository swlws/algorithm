/**
 * 递归
 * @param {*} n
 * @returns
 */
function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}
// console.time('fib')
// console.log('fib', fib(20))
// console.timeEnd('fib')

/**
 * 记忆化递归
 * @param {*} n
 * @param {*} memo
 * @returns
 */
function fibMemo(n, memo = {}) {
  if (n <= 1) return n
  if (memo[n]) return memo[n]
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  return memo[n]
}

console.time('fibMemo')
console.log('fibMemo', fibMemo(20))
console.timeEnd('fibMemo')

/**
 * 动态规划
 * @param {*} n
 * @returns
 */
function fibDP(n) {
  if (n <= 1) return n
  const dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.time('fibDP')
console.log('fibDP', fibDP(20))
console.timeEnd('fibDP')

/**
 * 动态规划 + 空间优化
 * @param {*} n
 * @returns
 */
function fibOptimized(n) {
  if (n < 2) return n
  let a = 0,
    b = 1
  for (let i = 2; i <= n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}

console.time('fibOptimized')
console.log('fibOptimized', fibOptimized(20))
console.timeEnd('fibOptimized')
