const cache = new Map()

/**
 * 爬楼梯
 *      动态规划：dp[i] = dp[i-1] + dp[i-2]
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 0) return 0
  if (n == 1) return 1
  if (n == 2) return 2

  const n1 = cache.get(n - 1)
  const n2 = cache.get(n - 2)

  const v = (n1 ? n1 : climbStairs(n - 1)) + (n2 ? n2 : climbStairs(n - 2))
  cache.set(n, v)
  return v
}

// [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903]

// console.log(climbStairs(0))
for (let i = 0; i < 10; i++) {
  console.log(climbStairs(i))
}

var climbStairsV2 = function (n, memo = {}) {
  if (n == 0) return 0
  if (n == 1) return 1
  if (n == 2) return 2

  if (memo[n]) return memo[n]

  memo[n] = climbStairsV2(n - 1, memo) + climbStairsV2(n - 2, memo)
  return memo[n]
}

for (let i = 0; i < 10; i++) {
  console.log(i, '-', climbStairs(i))
  console.log(i, '-', climbStairsV2(i))
}
