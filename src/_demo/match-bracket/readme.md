# 括号匹配

给出指定的括号，匹配到与其闭合的括号

## 使用示例

```js
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

// 输出
// {
//   leftBracketRowIndex: 2,
//   leftBracketIndex: 1,
//   rightBracketRowIndex: 2,
//   rightBracketIndex: 0
// }
```
