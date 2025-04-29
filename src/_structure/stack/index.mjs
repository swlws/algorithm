class Stack {
  constructor() {
    // 使用数组来存储栈中的元素
    this.items = []
  }

  /**
   * 将元素压入栈顶
   * @param {any} element - 要入栈的元素
   */
  push(element) {
    this.items.push(element)
  }

  /**
   * 从栈顶弹出元素
   * @returns {any|null} - 若栈不为空，返回弹出的元素；若栈为空，返回 null
   */
  pop() {
    if (this.isEmpty()) {
      return null
    }
    return this.items.pop()
  }

  /**
   * 查看栈顶元素，但不弹出
   * @returns {any|null} - 若栈不为空，返回栈顶元素；若栈为空，返回 null
   */
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.items[this.items.length - 1]
  }

  /**
   * 判断栈是否为空
   * @returns {boolean} - 若栈为空，返回 true；否则返回 false
   */
  isEmpty() {
    return this.items.length === 0
  }

  /**
   * 获取栈中元素的数量
   * @returns {number} - 栈的大小
   */
  size() {
    return this.items.length
  }

  /**
   * 清空栈
   */
  clear() {
    this.items = []
  }
}

export { Stack }
