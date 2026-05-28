/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function(power) {
    const freq = new Map();

    for (const p of power) {
        freq.set(p, (freq.get(p) || 0) + 1);
    }

    const values = [...freq.keys()].sort((a, b) => a - b);

    const n = values.length;

    const dp = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const curr =
            values[i] * freq.get(values[i]);

        dp[i] = curr;

        for (let j = i - 1; j >= 0; j--) {
            if (values[i] - values[j] > 2) {
                dp[i] = Math.max(
                    dp[i],
                    dp[j] + curr
                );
                break;
            }
        }

        if (i > 0) {
            dp[i] = Math.max(dp[i], dp[i - 1]);
        }
    }

    return dp[n - 1];
};