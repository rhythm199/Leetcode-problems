/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function(n, cuts) {

    cuts.push(0);
    cuts.push(n);

    cuts.sort((a, b) => a - b);

    const m = cuts.length;

    const dp = Array.from(
        { length: m },
        () => Array(m).fill(0)
    );

    for (let len = 2; len < m; len++) {

        for (let left = 0; left + len < m; left++) {

            let right = left + len;

            dp[left][right] = Infinity;

            for (let mid = left + 1; mid < right; mid++) {

                dp[left][right] = Math.min(
                    dp[left][right],
                    cuts[right] - cuts[left] +
                    dp[left][mid] +
                    dp[mid][right]
                );
            }

            if (dp[left][right] === Infinity) {
                dp[left][right] = 0;
            }
        }
    }

    return dp[0][m - 1];
};