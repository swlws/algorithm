// scan-checker.js
import fs from 'fs'
import readline from 'readline'
import path from 'path'

// 目标文件路径
const __dirname = './src/_demo'
const targetFile = path.resolve(__dirname, 'file.txt')

// 正则：匹配 checker.函数名(...)
const checkerRegex = /checker\.(\w+)\s*\(/g

async function scanFile(file) {
  const rl = readline.createInterface({
    input: fs.createReadStream(file),
    crlfDelay: Infinity,
  })

  let lineNumber = 0
  const set = new Set()
  for await (const line of rl) {
    lineNumber++
    let match
    while ((match = checkerRegex.exec(line)) !== null) {
      set.add(match[1])
    }
  }

  return Array.from(set)
}

scanFile(targetFile)
  .then((list) => {
    const targetFile = path.resolve(__dirname, 'checker-list.txt')
    fs.writeFileSync(targetFile, list.join('\n'))
  })
  .catch((err) => {
    console.error('Error scanning file:', err)
  })
