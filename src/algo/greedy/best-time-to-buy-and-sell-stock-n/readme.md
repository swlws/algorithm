# 买卖股票的最佳时机

LeetCode: <https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/description/>

给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。

## 思路

只要后一天的价格比前一天高，就进行买卖操作，将每天的利润累加起来，就能得到最大利润。
