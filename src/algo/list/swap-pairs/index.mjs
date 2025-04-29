import { ListNode, SinglyLinkedList } from '../../../_structure/link/index.mjs'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return []
  }
  let originalHead = head

  let prevNode = null
  let index = 1
  while (head) {
    if (index % 2 === 0) {
      const tempVal = head.val
      const prevVal = prevNode.val

      head.val = prevVal
      prevNode.val = tempVal
    }

    prevNode = head
    head = head.next
    index++
  }

  const rt = []
  while (originalHead) {
    rt.push(originalHead.val)
    originalHead = originalHead.next
  }
  return rt
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrLink = SinglyLinkedList.fromArray(arr)
const rtLink = swapPairs(arrLink.head)
console.log(rtLink)
