function countMap(str) {
  let map = new Map()
  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (map.has(char)) {
      map.set(char, map.get(char) + 1)
    } else {
      map.set(char, 1)
    }
  }
  return map
}

function isSubStr(subStrMap, targetMap) {
  for (let [key, value] of targetMap) {
    if (subStrMap.has(key)) {
      if (subStrMap.get(key) < value) {
        return false
      }
    } else {
      return false
    }
  }

  return true
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const tCountMap = countMap(t)
  const tLen = t.length
  const sLen = s.length
  if (tLen > sLen) return []

  let left = 0,
    right = left
  let subStrList = []

  const windowCountMap = new Map()
  while (left < sLen - tLen + 1 && right < sLen) {
    for (; right < sLen; ) {
      let char = s[right]
      if (tCountMap.has(char)) {
        if (windowCountMap.has(char)) {
          windowCountMap.set(char, windowCountMap.get(char) + 1)
        } else {
          windowCountMap.set(char, 1)
        }
      }

      if (isSubStr(windowCountMap, tCountMap)) {
        subStrList.push(s.slice(left, right + 1))
      }

      right++
    }
    left++
    right = left
    windowCountMap.clear()
  }

  return subStrList
}

/**
 * @param {string} s - 源字符串
 * @param {string} t - 目标字符串
 * @return {string} - 包含 t 中所有字符的最短子串
 */
function minWindow2(s, t) {
  if (s.length < t.length) return ''

  // 统计目标字符串 t 中每个字符的出现次数
  const targetMap = new Map()
  for (const char of t) {
    targetMap.set(char, (targetMap.get(char) || 0) + 1)
  }

  // 需要匹配的字符种类数
  let required = targetMap.size
  let left = 0,
    right = 0
  // 窗口内已经匹配的字符种类数
  let formed = 0
  // 统计窗口内字符的出现次数
  const windowMap = new Map()
  // 最小子串的长度，初始化为无穷大
  let minLen = Infinity
  // 最小子串的起始位置
  let minLeft = 0

  while (right < s.length) {
    let char = s[right]
    windowMap.set(char, (windowMap.get(char) || 0) + 1)

    if (targetMap.has(char) && windowMap.get(char) === targetMap.get(char)) {
      formed++
    }

    while (left <= right && formed === required) {
      char = s[left]

      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        minLeft = left
      }

      windowMap.set(char, windowMap.get(char) - 1)

      if (targetMap.has(char) && windowMap.get(char) < targetMap.get(char)) {
        formed--
      }

      left++
    }

    right++
  }

  return minLen === Infinity ? '' : s.substring(minLeft, minLeft + minLen)
}

console.log(1, minWindow('ADOBECODEBANC', 'ABC'))
console.log(2, minWindow('a', 'a'))
console.log(3, minWindow('a', 'aa'))
console.log(4, minWindow('ab', 'a'))
