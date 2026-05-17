/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
     let m = s.length;
    let n = t.length;

    const dp = Array.from(
        { length: m + 1 },
        () => Array(n + 1).fill(0)
    );

    // empty t
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {

        for (let j = 1; j <= n; j++) {

            // skip current char
            dp[i][j] = dp[i - 1][j];

            // take matching char
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] += dp[i - 1][j - 1];
            }
        }
    }

    return dp[m][n];
};