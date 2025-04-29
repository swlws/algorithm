// 使用 ES Modules 语法导入模块
import murmurhash3 from 'murmurhash3js'

class BloomFilter {
  /**
   * 初始化布隆过滤器
   * @param {number} size - 位数组的大小
   * @param {number} hashNum - 哈希函数的数量
   */
  constructor(size, hashNum) {
    this.size = size
    // 初始化位数组，所有位都置为 0
    this.bitArray = new Array(size).fill(0)
    this.hashNum = hashNum
  }

  /**
   * 计算元素的多个哈希值
   * @param {string} item - 要插入或查询的元素
   * @returns {Array<number>} - 包含多个哈希值的数组
   */
  getHashIndices(item) {
    const indices = []
    for (let i = 0; i < this.hashNum; i++) {
      // 使用 murmurhash3 计算哈希值
      const hashValue = murmurhash3.x86.hash32(item + i)
      const index = hashValue % this.size
      indices.push(index)
    }
    return indices
  }

  /**
   * 向布隆过滤器中插入元素
   * @param {string} item - 要插入的元素
   */
  add(item) {
    const indices = this.getHashIndices(item)
    indices.forEach((index) => {
      this.bitArray[index] = 1
    })
  }

  /**
   * 检查元素是否可能存在于布隆过滤器中
   * @param {string} item - 要检查的元素
   * @returns {boolean} - 如果可能存在返回 true，否则返回 false
   */
  contains(item) {
    const indices = this.getHashIndices(item)
    for (const index of indices) {
      if (this.bitArray[index] === 0) {
        return false
      }
    }
    return true
  }
}

// 使用示例
const bloomFilter = new BloomFilter(1000, 5)
bloomFilter.add('apple')
console.log(bloomFilter.contains('apple')) // 输出: true
console.log(bloomFilter.contains('banana')) // 输出: false

// 使用 ES Modules 语法导出模块
export default BloomFilter
