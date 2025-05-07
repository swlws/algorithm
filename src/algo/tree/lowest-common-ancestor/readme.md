# 二叉树中节点的最近公共祖先

LeetCode 地址：<https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/>

树中任意两个节点 `p` 和 `q`，它们的最近公共祖先 `LCA` 是一个节点 `x`，满足 `x` 是 `p` 和 `q` 的祖先且 `x` 的深度尽可能大（一个节点也可以是它自己的祖先）。

## 解法

递归解法：

1. 如果当前节点是 `p` 或 `q`，则直接返回当前节点
2. 递归遍历当前节点的左子树和右子树，分别得到左子树和右子树的最近公共祖先节点 `left` 和 `right`
3. 如果 `left` 和 `right` 都不为空，则当前节点 `root` 就是最近公共祖先节点，返回当前节点 `root`
4. 如果 `left` 为空，则返回 `right`，否则返回 `left`
