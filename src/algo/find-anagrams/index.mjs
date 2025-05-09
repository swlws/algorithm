/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = []
  const sLen = s.length
  const pLen = p.length

  if (sLen < pLen) return result

  const sCount = new Array(26).fill(0)
  const pCount = new Array(26).fill(0)

  for (let i = 0; i < pLen; i++) {
    sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++
    pCount[p[i].charCodeAt() - 'a'.charCodeAt()]++
  }

  if (sCount.join('') === pCount.join('')) {
    result.push(0)
  }

  for (let i = pLen; i < sLen; i++) {
    sCount[s[i].charCodeAt() - 'a'.charCodeAt()]++
    sCount[s[i - pLen].charCodeAt() - 'a'.charCodeAt()]--

    if (sCount.join('') === pCount.join('')) {
      result.push(i - pLen + 1)
    }
  }

  return result
}

console.log(findAnagrams('cbaebabacd', 'abc'))
