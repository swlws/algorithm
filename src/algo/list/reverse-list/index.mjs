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
var reverseList = function (head) {
  const newList = new SinglyLinkedList()

  let tempNode = null
  while (head) {
    const newNode = new ListNode(head.val)
    newList.head = newNode
    newNode.next = tempNode
    tempNode = newNode

    head = head.next
  }

  return newList
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arrLink = SinglyLinkedList.fromArray(arr)
const rtLink = reverseList(arrLink.head)
console.log(arrLink)

while (rtLink.head) {
  console.log(rtLink.head.val)
  rtLink.head = rtLink.head.next
}
