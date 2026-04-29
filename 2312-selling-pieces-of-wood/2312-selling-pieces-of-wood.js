/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} prices
 * @return {number}
 */
var sellingWood = function(m, n, prices) {
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    for (let [h, w, price] of prices) {
        dp[h][w] = price;
    }

    for (let h = 1; h <= m; h++) {
        for (let w = 1; w <= n; w++) {
            for (let i = 1; i < h; i++) {
                dp[h][w] = Math.max(dp[h][w], dp[i][w] + dp[h - i][w]);
            }
            for (let j = 1; j < w; j++) {
                dp[h][w] = Math.max(dp[h][w], dp[h][j] + dp[h][w - j]);
            }
        }
    }

    return dp[m][n];
};