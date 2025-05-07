import { BinaryTree, TreeNode } from '../../../_structure/binary-tree/index.mjs'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root

  return left || right
}

const node5 = new TreeNode(5)
const node10 = new TreeNode(10)
const node15 = new TreeNode(15)
const node20 = new TreeNode(20)
const node25 = new TreeNode(25)

node10.left = node5
node10.right = node20
node20.left = node15
node20.right = node25

const binaryTree = new BinaryTree()
binaryTree.root = node10

console.log(
  '二叉树中节点的最近公共祖先',
  lowestCommonAncestor(binaryTree.root, node15, node25)
)
