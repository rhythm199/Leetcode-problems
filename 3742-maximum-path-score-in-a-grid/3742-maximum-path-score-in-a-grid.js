/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var maxPathScore = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from({ length: m }, () =>
        Array.from({ length: n }, () =>
            Array(k + 1).fill(-Infinity)
        )
    );

    // start
    dp[0][0][0] = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let c = 0; c <= k; c++) {
                if (dp[i][j][c] === -Infinity) continue;

                // move right
                if (j + 1 < n) {
                    const cost = grid[i][j + 1] > 0 ? 1 : 0;
                    if (c + cost <= k) {
                        dp[i][j + 1][c + cost] = Math.max(
                            dp[i][j + 1][c + cost],
                            dp[i][j][c] + grid[i][j + 1]
                        );
                    }
                }
                if (i + 1 < m) {
                    const cost = grid[i + 1][j] > 0 ? 1 : 0;
                    if (c + cost <= k) {
                        dp[i + 1][j][c + cost] = Math.max(
                            dp[i + 1][j][c + cost],
                            dp[i][j][c] + grid[i + 1][j]
                        );
                    }
                }
            }
        }
    }

    let ans = -Infinity;
    for (let c = 0; c <= k; c++) {
        ans = Math.max(ans, dp[m - 1][n - 1][c]);
    }

    return ans < 0 ? -1 : ans;
};