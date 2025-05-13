/**
 * 二叉树的最大深度
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepthViaDfs = function (root) {
  if (!root) {
    return 0
  }

  return Math.max(maxDepthViaDfs(root.left), maxDepthViaDfs(root.right)) + 1
}

var maxDepthViaBfs = function (root) {
  if (!root) {
    return 0
  }

  let queue = [root]
  let depth = 0
  while (queue.length) {
    let len = queue.length
    while (len--) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    depth++
  }

  return depth
}
