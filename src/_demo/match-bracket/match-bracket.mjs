import {
  ENUM_BRACKET_DIRECTION,
  ENUM_BRACKET_DIRECTION_NAME,
} from './constants.mjs'
import { tokenization } from './tokenization.mjs'

/**
 * 括号匹配
 *   传递左括号字符串时，匹配右括号
 *   匹配左括号字符串时，匹配右括号
 */
class MatchBracket {
  #init(params = {}) {
    this.#initState(params)
  }

  #initState(params = {}) {
    const {
      data = [],
      rowIndex = 0,
      bracketString = '',
      direction = '',
    } = params
    this.data = data || [] // 数据源。数据结构 [{ left: '((', right: '))' }]
    this.rowIndex = rowIndex // 数据源的行索引
    this.bracketString = bracketString // 行索引的数据源中的括号字符串
    this.direction = direction // 括号方向。left - 左括号，right - 右括号

    // 分词 - 将每一个括号解析为单独的 Token
    this.bracketTokens = tokenization(this.data)
    // 解析目标括号的开始索引
    this.bracketStringIndex = this.#parseBracketStringBeginIndex()
  }

  #validate() {
    if (!this.bracketTokens.length || this.bracketStringIndex === -1) {
      return false
    }

    return true
  }

  /**
   * 解析目标括号的开始索引
   * @returns
   */
  #parseBracketStringBeginIndex() {
    const rowLen = this.data.length
    if (
      this.rowIndex < 0 ||
      this.rowIndex > rowLen - 1 ||
      !this.bracketString
    ) {
      return -1
    }

    const rowData = this.data[this.rowIndex] || {}
    if (this.direction === ENUM_BRACKET_DIRECTION.LEFT) {
      const { left = '' } = rowData
      return left.lastIndexOf(this.bracketString)
    } else if (this.direction === ENUM_BRACKET_DIRECTION.RIGHT) {
      const { right = '' } = rowData
      let index = right.indexOf(this.bracketString)
      return index === -1 ? -1 : index + this.bracketString.length - 1
    }

    return -1
  }

  /**
   * 匹配括号
   * @returns
   */
  #matchBracket() {
    const stack = [] // 左括号栈

    for (const token of this.bracketTokens) {
      const { value, direction, rowIndex, bracketIndex, _isOrigin } = token
      if (direction === ENUM_BRACKET_DIRECTION.LEFT) {
        // 左括号
        stack.push(token)
      } else if (direction === ENUM_BRACKET_DIRECTION.RIGHT) {
        // 右括号
        const lastLeftBracket = stack[stack.length - 1]
        if (!lastLeftBracket) {
          const warnString = `括号不匹配，第${rowIndex}行第${bracketIndex}个${ENUM_BRACKET_DIRECTION_NAME[direction]}, 未匹配到它的对应括号`
          console.warn(warnString)

          return null
        }

        // 匹配到目标括号
        if (_isOrigin || lastLeftBracket._isOrigin) {
          return [lastLeftBracket, token]
        }

        stack.pop()
      }
    }

    const warnString = `括号不匹配，第${this.rowIndex}行第${
      this.bracketStringIndex
    }个${ENUM_BRACKET_DIRECTION_NAME[this.direction]}, 未匹配到它的对应括号`
    console.warn(warnString)

    return null
  }

  /**
   * 设置原始括号字符串
   * @returns
   */
  #setOriginalBracketString() {
    for (const token of this.bracketTokens) {
      const { direction, rowIndex, bracketIndex } = token
      if (
        direction === this.direction &&
        rowIndex === this.rowIndex &&
        bracketIndex === this.bracketStringIndex
      ) {
        //  标记为原始
        token._isOrigin = true
        return
      }
    }
  }

  #formatResult(result) {
    if (!result) return null

    const [left, right] = result
    return {
      // 左括号的行索引
      leftBracketRowIndex: left.rowIndex,
      // 左括号的索引
      leftBracketIndex: left.bracketIndex,
      // 右括号的行索引
      rightBracketRowIndex: right.rowIndex,
      // 右括号的索引
      rightBracketIndex: right.bracketIndex,
    }
  }

  /**
   * 执行匹配
   * @returns
   */
  match(params = {}) {
    // 初始化 - 内部状态
    this.#init(params)

    // 状态校验
    if (!this.#validate()) {
      return null
    }

    // 设置标记 - 设置原始括号字符串
    this.#setOriginalBracketString()

    // 匹配括号
    const rt = this.#matchBracket()
    return this.#formatResult(rt)
  }
}

export default new MatchBracket()
