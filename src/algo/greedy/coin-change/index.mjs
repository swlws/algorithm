/**
 * 使用贪心算法解决找零问题
 * @description 给定一个金额和一些硬币面额，找出最少的硬币数量来组成该金额。
 * @description 该算法仅适用于硬币面值满足特定条件（如美国硬币面值体系）的情况，对于某些特殊的面值组合，可能无法得到最优解。
 * @param {*} coins
 * @param {*} amount
 * @returns
 */
function greedyCoinChange(coins, amount) {
  let coinsUsed = []
  coins.sort((a, b) => b - a) // Sort coins in descending order
  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin
      coinsUsed.push(coin)
    }
  }
  return coinsUsed
}

console.log('贪心算法: ', greedyCoinChange([1, 5, 10, 25], 63))

/**
 * 使用动态规划解决找零问题
 * @description 给定一个金额和一些硬币面额，找出最少的硬币数量来组成该金额。
 * @description 该算法适用于所有硬币面值的情况，但是计算复杂度较高。
 *
 * @param {*} coins
 * @param {*} amount
 */
function dpCoinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0 // Base case: 0 amount requires 0 coins

  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      const prevAmount = i - coin
      if (prevAmount >= 0) {
        dp[i] = Math.min(dp[i], dp[prevAmount] + 1)
      }
    }
  }

  console.log('动态规划: ', dp)

  return dp[amount] === Infinity ? -1 : dp[amount]
}

console.log('动态规划: ', dpCoinChange([1, 5, 10, 25], 63))
