/**
 * 计算二叉树的最小深度
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} - 二叉树的最小深度
 */
var minDepthDfs = function (root) {
  // 若根节点为空，最小深度为 0
  if (root === null) {
    return 0
  }
  // 若根节点没有左右子节点，说明是叶子节点，最小深度为 1
  if (root.left === null && root.right === null) {
    return 1
  }
  // 若根节点只有右子树，递归计算右子树的最小深度并加 1
  if (root.left === null) {
    return minDepthDfs(root.right) + 1
  }
  // 若根节点只有左子树，递归计算左子树的最小深度并加 1
  if (root.right === null) {
    return minDepthDfs(root.left) + 1
  }
  // 若根节点左右子树都存在，递归计算左右子树的最小深度，取最小值并加 1
  return Math.min(minDepthDfs(root.left), minDepthDfs(root.right)) + 1
}

/**
 * 使用广度优先搜索计算二叉树的最小深度
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量
 * @param {TreeNode} root - 二叉树的根节点
 * @return {number} - 二叉树的最小深度
 */
var minDepthBfs = function (root) {
  if (root === null) {
    return 0
  }
  const queue = [[root, 1]] // 队列中存储节点和对应的深度
  while (queue.length > 0) {
    const [node, depth] = queue.shift()
    // 若当前节点是叶子节点，返回当前深度
    if (node.left === null && node.right === null) {
      return depth
    }
    // 将左子节点加入队列，深度加 1
    if (node.left) {
      queue.push([node.left, depth + 1])
    }
    // 将右子节点加入队列，深度加 1
    if (node.right) {
      queue.push([node.right, depth + 1])
    }
  }
}
