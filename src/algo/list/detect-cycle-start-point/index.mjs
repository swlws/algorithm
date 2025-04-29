/**
 * 找到链表开始入环的第一个节点
 * @param {ListNode} head - 链表的头节点
 * @returns {ListNode|null} - 环的入口节点，若链表无环则返回 null
 */
function detectCycle(head) {
  if (!head || !head.next) {
    return null
  }
  let slow = head
  let fast = head
  // 判断链表是否有环
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      // 快慢指针相遇，说明链表有环
      break
    }
  }
  // 若快指针到达链表末尾，说明链表无环
  if (!fast || !fast.next) {
    return null
  }
  // 将慢指针重新指向头节点
  slow = head
  // 快慢指针以相同速度前进，再次相遇的节点即为环的入口节点
  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }
  return slow
}
