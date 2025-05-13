/**
 * 分发饼干
 * @param {number[]} g 胃口值
 * @param {number[]} s 饼干大小
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b) // 胃口值从小到大排序
  s.sort((a, b) => a - b) // 饼干大小从小到大排序
  let i = 0 // 胃口值索引
  let j = 0 // 饼干大小索引

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      i++
      j++
    } else {
      j++
    }
  }
  return i
}

console.log(findContentChildren([1, 2, 3], [1, 1]))
console.log(findContentChildren([1, 2], [1, 2, 3]))
console.log(findContentChildren([1, 2, 3], [3]))
