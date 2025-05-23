# 最小堆

堆（Heap）是一种特殊的完全二叉树，在计算机科学中常用于实现优先队列，是很多算法（如堆排序、Dijkstra最短路径等）的核心部分。

# 一、堆的定义

堆是一种满足下列性质的完全二叉树：

- 最大堆（大根堆）：任意节点的值 ≥ 其子节点的值，根节点是最大值。
- 最小堆（小根堆）：任意节点的值 ≤ 其子节点的值，根节点是最小值。

堆不要求左右子树有序，仅要求父子关系满足大小关系。

# 二、堆的存储结构

堆通常用数组存储，而不是使用链式结构：

- 对于下标为 i 的节点：
  - 左子节点下标：2i + 1
  - 右子节点下标：2i + 2
  - 父节点下标：floor((i - 1) / 2)
