export class TrieNode {
  constructor() {
    // 标记该节点是否为一个单词的结尾
    this.isEnd = false
    // 存储子节点，键为字符，值为对应的 TrieNode
    this.children = {}
  }
}

export class Trie {
  constructor() {
    // 初始化根节点
    this.root = new TrieNode()
  }

  /**
   * 向字典树中插入一个单词
   * @param {string} word - 要插入的单词
   */
  insert(word) {
    let node = this.root
    for (const char of word) {
      if (!node.children[char]) {
        // 若字符对应的子节点不存在，则创建新节点
        node.children[char] = new TrieNode()
      }
      // 移动到下一个节点
      node = node.children[char]
    }
    // 标记单词结尾
    node.isEnd = true
  }

  /**
   * 查找字典树中是否存在指定的单词
   * @param {string} word - 要查找的单词
   * @returns {boolean} - 是否存在该单词
   */
  search(word) {
    const node = this._traverse(word)
    return node !== null && node.isEnd
  }

  /**
   * 查找字典树中是否存在以指定前缀开头的单词
   * @param {string} prefix - 要查找的前缀
   * @returns {boolean} - 是否存在以该前缀开头的单词
   */
  startsWith(prefix) {
    return this._traverse(prefix) !== null
  }

  /**
   * 辅助方法，遍历字典树直到前缀的最后一个字符节点
   * @param {string} prefix - 要遍历的前缀
   * @returns {TrieNode|null} - 前缀最后一个字符对应的节点，若不存在则返回 null
   */
  _traverse(prefix) {
    let node = this.root
    for (const char of prefix) {
      if (!node.children[char]) {
        // 若字符对应的子节点不存在，返回 null
        return null
      }
      // 移动到下一个节点
      node = node.children[char]
    }
    return node
  }
}

// Example usage:
// const trie = new Trie()
// trie.insert('apple')
// console.log(trie)
