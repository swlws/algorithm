/**
 * 位 1 的个数 - 使用位运算
 * @param {number} n
 * @return {number}
 */
var hammingWeightViaBit = function (n) {
  let count = 0
  for (let i = 0; i < 32; i++) {
    // 通过位运算检查每一位是否为 1
    if (n & (1 << i)) {
      count++
    }
  }
  return count
}

/**
 * 计算整数二进制表示中 1 的个数
 * @param {number} n - 要计算的整数
 * @return {number} - 二进制表示中 1 的个数
 */
function hammingWeight(n) {
  // 将整数转换为二进制字符串
  const binaryStr = n.toString(2)

  let count = 0
  for (let char of binaryStr) {
    if (char === '1') {
      count++
    }
  }
  return count
}
