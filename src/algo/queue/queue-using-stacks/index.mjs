import { Stack } from '../../../_structure/stack/index.mjs'
var MyQueue = function () {
  this.mainStack = new Stack()
  this.subStack = new Stack()
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  if (this.mainStack.isEmpty()) {
    this.mainStack.push(x)
  } else {
    while (!this.mainStack.isEmpty()) {
      this.subStack.push(this.mainStack.pop())
    }

    this.mainStack.push(x)

    while (!this.subStack.isEmpty()) {
      this.mainStack.push(this.subStack.pop())
    }
  }
}

/**
 * 遵循先进先出原则
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.mainStack.isEmpty()) {
    return null
  }
  return this.mainStack.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.mainStack.isEmpty()) {
    return null
  }
  return this.mainStack.peek()
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.mainStack.isEmpty()
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const q = new MyQueue()
q.push(1)
q.push(2)
q.push(3)
q.push(4)

console.log(q.pop())
console.log(q.pop())
console.log(q.pop())
console.log(q.empty())
