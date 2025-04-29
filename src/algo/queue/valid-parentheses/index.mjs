const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (!s) return true
  const keys = Object.keys(map)
  const values = Object.values(map)

  const stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (keys.includes(char)) {
      stack.push(char)
    } else if (values.includes(char)) {
      if (map[stack.pop()] !== char) {
        return false
      }
    }
  }

  return stack.length === 0
}
