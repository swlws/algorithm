// 定义链表节点类
class ListNode {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// 定义单链表类
class SinglyLinkedList {
  constructor() {
    // 初始化头节点为 null
    this.head = null
    // 初始化链表长度为 0
    this.length = 0
  }

  /**
   * 追加元素到链表尾部
   * @param {any} value - 要追加的元素值
   */
  append(value) {
    const newNode = new ListNode(value)
    if (!this.head) {
      // 若链表为空，新节点即为头节点
      this.head = newNode
    } else {
      let current = this.head
      // 遍历到链表尾部
      while (current.next) {
        current = current.next
      }
      // 将新节点添加到尾部
      current.next = newNode
    }
    this.length++
  }

  /**
   * 在指定位置插入元素
   * @param {number} position - 插入位置，从 0 开始计数
   * @param {any} value - 要插入的元素值
   * @returns {boolean} - 插入成功返回 true，失败返回 false
   */
  insert(position, value) {
    if (position < 0 || position > this.length) {
      return false
    }
    const newNode = new ListNode(value)
    if (position === 0) {
      // 在头部插入
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      let previous = null
      let index = 0
      // 找到插入位置的前一个节点
      while (index < position) {
        previous = current
        current = current.next
        index++
      }
      // 插入新节点
      previous.next = newNode
      newNode.next = current
    }
    this.length++
    return true
  }

  /**
   * 查找指定值首次出现的位置
   * @param {any} value - 要查找的值
   * @returns {number} - 若找到返回位置索引，未找到返回 -1
   */
  findIndex(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  /**
   * 删除指定位置的元素
   * @param {number} position - 删除位置，从 0 开始计数
   * @returns {any|null} - 删除的元素值，若删除失败返回 null
   */
  removeAt(position) {
    if (position < 0 || position >= this.length) {
      return null
    }
    let current = this.head
    if (position === 0) {
      // 删除头节点
      this.head = current.next
    } else {
      let previous = null
      let index = 0
      // 找到删除位置的前一个节点
      while (index < position) {
        previous = current
        current = current.next
        index++
      }
      // 删除当前节点
      previous.next = current.next
    }
    this.length--
    return current.value
  }

  /**
   * 静态方法，从可迭代对象创建一个新的单链表
   * @param {Iterable} iterable - 可迭代对象，如数组
   * @returns {SinglyLinkedList} - 新的单链表实例
   */
  static from(iterable) {
    const list = new SinglyLinkedList()
    for (const value of iterable) {
      list.append(value)
    }
    return list
  }
}

export { SinglyLinkedList }
