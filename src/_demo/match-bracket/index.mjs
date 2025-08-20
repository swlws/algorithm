import { ENUM_BRACKET_DIRECTION } from './constants.mjs'
import matchBracketHelper from './match-bracket.mjs'

/**
 * 括号匹配
 */
export function matchBracket({
  data = [],
  rowIndex = 0,
  bracketString = '',
  direction = ENUM_BRACKET_DIRECTION.LEFT,
}) {
  return matchBracketHelper.match({
    data,
    rowIndex,
    bracketString,
    direction,
  })
}

const data = [
  { left: '((', right: ')' },
  { left: '(', right: '))' },
  { left: '((', right: ')' },
]

const res = matchBracket({
  data,
  rowIndex: 2,
  bracketString: '(',
  direction: ENUM_BRACKET_DIRECTION.LEFT,
})
console.log(res)
