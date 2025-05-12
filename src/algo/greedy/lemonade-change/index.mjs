/**
 * 柠檬水找零
 *     贪心算法
 *
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // 初始化 5 美元和 10 美元的数量
  let five = 0
  let ten = 0

  for (let bill of bills) {
    if (bill === 5) {
      // 收到 5 美元，直接收下
      five++
    } else if (bill === 10) {
      // 收到 10 美元，需要找零 5 美元
      if (five > 0) {
        five--
        ten++
      } else {
        // 没有 5 美元，无法找零
        return false
      }
    } else if (bill === 20) {
      // 收到 20 美元，优先用 10 美元和 5 美元找零
      if (ten > 0 && five > 0) {
        ten--
        five--
      } else if (five >= 3) {
        // 没有 10 美元，用 3 张 5 美元找零
        five -= 3
      } else {
        // 无法找零
        return false
      }
    }
  }

  // 所有顾客都能正确找零
  return true
}

// 示例用法
console.log(lemonadeChange([5, 5, 5, 10, 20])) // true
console.log(lemonadeChange([5, 5, 10, 10, 20])) // false
console.log(lemonadeChange([5, 5, 10])) // true
