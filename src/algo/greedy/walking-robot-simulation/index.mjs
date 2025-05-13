/**
 * 模拟机器人行走
 * 算法优化点：
 *      数组检索的耗时，高于 HashSet 的检索耗时
 * @param {number[]} commands -1： 向右转 90 度； -2 ：向左转 90 度； 其他正整数表示向前走多少步
 * @param {number[][]} obstacles 障碍物坐标
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const directions = [
    // 方向数组，分别表示北、东、南、西
    [0, 1], // 北
    [1, 0], // 东
    [0, -1], // 南
    [-1, 0], // 西
  ]

  let x = 0,
    y = 0,
    direction = 0
  let maxDistance = 0

  // 将障碍物坐标存储到 Set 中，方便快速查找
  const obstacleSet = new Set()
  for (const obstacle of obstacles) {
    obstacleSet.add(`${obstacle[0]},${obstacle[1]}`)
  }

  for (let command of commands) {
    if (command === -1) {
      // 右转 90 度
      direction = (direction + 1) % 4
    } else if (command === -2) {
      // 左转 90 度
      direction = (direction + 3) % 4
    } else {
      // 向前走 command 步
      for (let i = 0; i < command; i++) {
        const nextX = x + directions[direction][0]
        const nextY = y + directions[direction][1]
        // 检查是否有障碍物
        // TODO：优化，这里耗时较多
        // if (!obstacles.some(([ox, oy]) => ox === nextX && oy === nextY)) {
        if (!obstacleSet.has(`${nextX},${nextY}`)) {
          x = nextX
          y = nextY
          maxDistance = Math.max(maxDistance, x * x + y * y)
        } else {
          break // 遇到障碍物，停止前进
        }
      }
    }
  }

  return maxDistance
}

console.log(robotSim([4, -1, 3], [])) // 25
console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]])) // 65
console.log(robotSim([6, -1, -1, 6], [])) // 36
