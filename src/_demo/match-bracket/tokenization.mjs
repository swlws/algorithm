import { ENUM_BRACKET_DIRECTION } from './constants.mjs'

/**
 * 分词 - 将每一个括号解析为单独的 Token
 * @param {*} data
 * @returns
 */
export function tokenization(data = []) {
  const list = []

  const rowLen = data.length
  for (let i = 0; i < rowLen; i++) {
    const rowData = data[i]
    const { left = '', right = '' } = rowData
    const leftList = parseTokens(left, ENUM_BRACKET_DIRECTION.LEFT, i)
    const rightList = parseTokens(right, ENUM_BRACKET_DIRECTION.RIGHT, i)
    list.push(...leftList, ...rightList)
  }

  return list
}

/**
 * 字符串解析为单独的括号
 * @param {*} str
 * @param {*} direction
 * @param {*} rowIndex
 * @returns
 */
function parseTokens(str = '', direction = '', rowIndex = 0) {
  if (!str) {
    return []
  }

  const list = []
  const brackets = str.split('') || []
  brackets.forEach((value, bracketIndex) => {
    if (value) {
      list.push({ value, rowIndex, direction, bracketIndex })
    }
  })

  return list
}
