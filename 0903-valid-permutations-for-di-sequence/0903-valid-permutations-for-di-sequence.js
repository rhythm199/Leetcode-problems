/**
 * @param {string} s
 * @return {number}
 */
var numPermsDISequence = function(s) {
    const MOD = 1000000007;
    const n = s.length;

    let dp = new Array(n + 1).fill(1);

    for (let idx = 0; idx < n; idx++) {
        const nextDp = new Array(n + 1).fill(0);

        if (s[idx] === "I") {
            let prefixSum = 0;

            for (let pos = 0; pos < n - idx; pos++) {
                prefixSum = (prefixSum + dp[pos]) % MOD;
                nextDp[pos] = prefixSum;
            }
        } else {
            let suffixSum = 0;

            for (let pos = n - idx - 1; pos >= 0; pos--) {
                suffixSum = (suffixSum + dp[pos + 1]) % MOD;
                nextDp[pos] = suffixSum;
            }
        }

        dp = nextDp;
    }

    return dp[0];
};