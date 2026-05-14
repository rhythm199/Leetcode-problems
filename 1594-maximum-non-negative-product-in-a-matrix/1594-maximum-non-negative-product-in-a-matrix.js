/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxProductPath = function(grid) {
    const MOD = 1e9 + 7;

    let m = grid.length;
    let n = grid[0].length;
    const maxDP = Array.from({ length: m }, () => Array(n).fill(0));
    const minDP = Array.from({ length: m }, () => Array(n).fill(0));

    maxDP[0][0] = grid[0][0];
    minDP[0][0] = grid[0][0];

    for (let i = 1; i < m; i++) {
        maxDP[i][0] = maxDP[i - 1][0] * grid[i][0];
        minDP[i][0] = minDP[i - 1][0] * grid[i][0];
    }
    for (let j = 1; j < n; j++) {
        maxDP[0][j] = maxDP[0][j - 1] * grid[0][j];
        minDP[0][j] = minDP[0][j - 1] * grid[0][j];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {

            const val = grid[i][j];

            const candidates = [
                maxDP[i - 1][j] * val,
                minDP[i - 1][j] * val,
                maxDP[i][j - 1] * val,
                minDP[i][j - 1] * val
            ];

            maxDP[i][j] = Math.max(...candidates);
            minDP[i][j] = Math.min(...candidates);
        }
    }

    let ans = maxDP[m - 1][n - 1];

    return ans < 0 ? -1 : ans % MOD;
};