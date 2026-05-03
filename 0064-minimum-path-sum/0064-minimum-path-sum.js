/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    let dp = new Array(n).fill(0);

    dp[0] = grid[0][0];

    for (let j = 1; j < n; j++) {
        dp[j] = dp[j - 1] + grid[0][j];
    }

    for (let i = 1; i < m; i++) {
        dp[0] += grid[i][0];
        for (let j = 1; j < n; j++) {
            dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
        }
    }

    return dp[n - 1];
};