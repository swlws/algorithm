# 链表环检测

检测单向链表是否存在环，常见有两种方法：哈希表法和快慢指针法。下面分别介绍这两种方法的实现思路、代码示例及复杂度分析。

---

## 1. 哈希表法

### 思路

遍历链表，将每个节点的引用存储在哈希表中。遍历过程中，若发现当前节点的引用已存在于哈希表，说明链表存在环；若遍历到链表末尾（即遇到 `null`），则说明链表无环。

### 代码示例

```javascript
// 假设 ListNode 类和 SinglyLinkedList 类已定义
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  const nodeSet = new Set();
  let current = head;
  while (current) {
    if (nodeSet.has(current)) {
      return true;
    }
    nodeSet.add(current);
    current = current.next;
  }
  return false;
}
```

复杂度分析
时间复杂度：$O(n)$，其中 $n$ 是链表的节点数，需要遍历链表一次。
空间复杂度：$O(n)$，主要是哈希表的空间开销，最坏情况下需要存储链表的所有节点。

## 2. 快慢指针法

### 思路

使用两个指针，一个快指针和一个慢指针。慢指针每次移动一步，快指针每次移动两步。如果链表存在环，快指针最终会追上慢指针；如果链表无环，快指针会先到达链表末尾（即遇到 null）。

### 代码示例

```js
// 假设 ListNode 类和 SinglyLinkedList 类已定义
class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function hasCycle(head) {
  if (!head || !head.next) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (!fast || !fast.next) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}
```

### 复杂度分析

- 时间复杂度：$O(n)$，其中 $n$ 是链表的节点数。在环内，快指针和慢指针的距离每次缩小 1，最多遍历 $n$ 个节点。
- 空间复杂度：$O(1)$，只需要使用两个指针，不随链表长度的增加而增加额外空间。
相对而言，快慢指针法空间复杂度更低，更适合处理大规模数据。你可以将上述代码添加到对应的文件中进行测试。
