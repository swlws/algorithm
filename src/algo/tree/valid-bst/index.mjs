import { BinaryTree, TreeNode } from '../../../_structure/binary-tree/index.mjs'

/**
 * 校验二叉搜索树
 * 原理：
 * 1. 二叉搜索树的中序遍历是升序的
 * @param {*} root
 * @returns
 */
function validateBST(root) {
  let prev = null
  const helper = (node) => {
    if (!node) return true

    if (!helper(node.left)) return false

    if (prev !== null && node.value <= prev) return false
    prev = node.value

    return helper(node.right)
  }

  return helper(root)
}

const binaryTree = new BinaryTree()
binaryTree.root = new TreeNode(10)
binaryTree.root.left = new TreeNode(5)
binaryTree.root.right = new TreeNode(20)
binaryTree.root.right.left = new TreeNode(15)
binaryTree.root.right.right = new TreeNode(25)

console.log('二叉搜索树', validateBST(binaryTree.root))
