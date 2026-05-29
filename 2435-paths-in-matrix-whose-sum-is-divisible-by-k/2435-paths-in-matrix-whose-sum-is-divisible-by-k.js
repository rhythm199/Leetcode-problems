/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */

var numberOfPaths = function(grid, k) {

    const MOD = 1e9 + 7;

    const m = grid.length;
    const n = grid[0].length;

    const dp = Array.from(
        { length: m },
        () =>
            Array.from(
                { length: n },
                () => Array(k).fill(0)
            )
    );

    dp[0][0][grid[0][0] % k] = 1;

    for (let i = 0; i < m; i++) {

        for (let j = 0; j < n; j++) {

            for (let rem = 0; rem < k; rem++) {

                let curr = dp[i][j][rem];

                if (curr === 0) continue;

                if (i + 1 < m) {

                    let nr =
                        (rem + grid[i + 1][j]) % k;

                    dp[i + 1][j][nr] =
                        (dp[i + 1][j][nr] + curr) % MOD;
                }

                if (j + 1 < n) {

                    let nr =
                        (rem + grid[i][j + 1]) % k;

                    dp[i][j + 1][nr] =
                        (dp[i][j + 1][nr] + curr) % MOD;
                }
            }
        }
    }

    return dp[m - 1][n - 1][0];
};