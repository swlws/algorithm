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
  console.log(root.value, left && left.value, right && right.value)

  if (left && right) return root

  return left || right
}

const node5 = new TreeNode(5)
const node10 = new TreeNode(10)
const node15 = new TreeNode(15)
const node20 = new TreeNode(20)
const node25 = new TreeNode(25)
const node30 = new TreeNode(30)
const node35 = new TreeNode(35)
const node40 = new TreeNode(40)
const node45 = new TreeNode(45)

node5.left = node10
node5.right = node15
node10.left = node20
node10.right = node25
node15.left = node30
node15.right = node35
node20.left = node40
node20.right = node45

const binaryTree = new BinaryTree()
binaryTree.root = node5

// 树结构可视化，横向展示
//         05
//     10      15
//   20  25  30  35
// 40  45

console.log(
  '二叉树中节点的最近公共祖先',
  lowestCommonAncestor(binaryTree.root, node40, node45)
)
