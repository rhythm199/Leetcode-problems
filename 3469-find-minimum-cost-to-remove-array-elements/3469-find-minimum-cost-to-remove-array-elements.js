/**
 * @param {number[]} nums
 * @return {number}
 */
var minCost = function (nums) {
  const n = nums.length;

  if (n < 3) {
    return Math.max(...nums);
  }

  const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Infinity));

  /**
   * DFS, using 2D Memoisation (i.e. `dp`)
   *
   * @param {number} i - smallest unvisited index
   * @param {number} j - biggest unvisited index
   * @returns number
   */
  const dfs = (i, j) => {
    if (i > n || j > n) return Infinity;
    if (dp[i][j] !== Infinity) return dp[i][j];
    if (j === n) return nums[i];
    if (j === n - 1) return Math.max(nums[i], nums[j]);

    return (dp[i][j] = Math.min(
      Math.max(nums[i], nums[j]) + dfs(j + 1, j + 2),
      Math.max(nums[i], nums[j + 1]) + dfs(j, j + 2),
      Math.max(nums[j], nums[j + 1]) + dfs(i, j + 2)
    ));
  };

  return Math.min(
    Math.max(nums[0], nums[1]) + dfs(2, 3),
    Math.max(nums[0], nums[2]) + dfs(1, 3),
    Math.max(nums[1], nums[2]) + dfs(0, 3)
  );
};