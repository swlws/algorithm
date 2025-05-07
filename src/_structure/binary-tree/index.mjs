// 定义二叉树节点类
class TreeNode {
  constructor(value) {
    // 节点存储的值
    this.value = value
    // 左子节点
    this.left = null
    // 右子节点
    this.right = null
  }
}

// 定义二叉树类
class BinaryTree {
  constructor() {
    // 根节点
    this.root = null
  }

  // 前序遍历
  preOrderTraversal(node = this.root, result = []) {
    if (node) {
      // 访问根节点
      result.push(node.value)
      // 递归遍历左子树
      this.preOrderTraversal(node.left, result)
      // 递归遍历右子树
      this.preOrderTraversal(node.right, result)
    }
    return result
  }

  // 中序遍历
  inOrderTraversal(node = this.root, result = []) {
    if (node) {
      // 递归遍历左子树
      this.inOrderTraversal(node.left, result)
      // 访问根节点
      result.push(node.value)
      // 递归遍历右子树
      this.inOrderTraversal(node.right, result)
    }
    return result
  }

  // 后序遍历
  postOrderTraversal(node = this.root, result = []) {
    if (node) {
      // 递归遍历左子树
      this.postOrderTraversal(node.left, result)
      // 递归遍历右子树
      this.postOrderTraversal(node.right, result)
      // 访问根节点
      result.push(node.value)
    }
    return result
  }

  // 层序遍历（BFS）
  levelOrderTraversal() {
    const result = []
    if (!this.root) return result
    const queue = [this.root]
    while (queue.length > 0) {
      const current = queue.shift()
      result.push(current.value)
      if (current.left) queue.push(current.left)
      if (current.right) queue.push(current.right)
    }
    return result
  }
}

// 使用示例
const binaryTree = new BinaryTree()
binaryTree.root = new TreeNode(10)
binaryTree.root.left = new TreeNode(5)
binaryTree.root.right = new TreeNode(20)
binaryTree.root.right.left = new TreeNode(15)
binaryTree.root.right.right = new TreeNode(25)

console.log('前序遍历:', binaryTree.preOrderTraversal())
console.log('中序遍历:', binaryTree.inOrderTraversal())
console.log('后序遍历:', binaryTree.postOrderTraversal())
console.log('层序遍历:', binaryTree.levelOrderTraversal())
