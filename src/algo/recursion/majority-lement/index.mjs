/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null
  let count = 0
  for (const num of nums) {
    if (count === 0) {
      candidate = num
      count = 1
    } else if (num === candidate) {
      count++
    } else {
      count--
    }
  }
  return candidate
}

console.log(majorityElement([3, 2, 3]))
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
