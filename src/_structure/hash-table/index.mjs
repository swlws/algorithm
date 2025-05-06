export default class HashTable {
  /**
   * 初始化哈希表
   * @param {number} size - 哈希表的大小，默认为 100
   */
  constructor(size = 100) {
    this.size = size
    // 初始化存储桶数组，每个元素为 null
    this.buckets = new Array(size).fill(null)
  }

  /**
   * 简单的哈希函数，将键转换为哈希表的索引
   * @param {string} key - 要进行哈希的键
   * @returns {number} - 哈希后的索引
   */
  hash(key) {
    let hashValue = 0
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i)
    }
    return hashValue % this.size
  }

  /**
   * 向哈希表中插入或更新键值对
   * @param {string} key - 键
   * @param {any} value - 值
   */
  set(key, value) {
    const index = this.hash(key)
    if (!this.buckets[index]) {
      this.buckets[index] = []
    }
    // 检查是否已存在相同的键，若存在则更新值
    for (let i = 0; i < this.buckets[index].length; i++) {
      const [storedKey] = this.buckets[index][i]
      if (storedKey === key) {
        this.buckets[index][i][1] = value
        return
      }
    }
    // 若不存在相同的键，则添加新的键值对
    this.buckets[index].push([key, value])
  }

  /**
   * 根据键从哈希表中获取值
   * @param {string} key - 键
   * @returns {any|null} - 若存在则返回对应的值，否则返回 null
   */
  get(key) {
    const index = this.hash(key)
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        const [storedKey, storedValue] = this.buckets[index][i]
        if (storedKey === key) {
          return storedValue
        }
      }
    }
    return null
  }

  /**
   * 根据键从哈希表中删除键值对
   * @param {string} key - 键
   * @returns {boolean} - 若删除成功返回 true，否则返回 false
   */
  delete(key) {
    const index = this.hash(key)
    if (this.buckets[index]) {
      for (let i = 0; i < this.buckets[index].length; i++) {
        const [storedKey] = this.buckets[index][i]
        if (storedKey === key) {
          this.buckets[index].splice(i, 1)
          return true
        }
      }
    }
    return false
  }
}

// 使用示例
const hashTable = new HashTable()
hashTable.set('apple', 10)
hashTable.set('banana', 20)
console.log(hashTable.get('apple')) // 输出: 10
hashTable.delete('apple')
console.log(hashTable.get('apple')) // 输出: null
