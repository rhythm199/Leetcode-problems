/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
     const n = s.length;

    const dp = Array.from({ length: n }, () =>
        Array(n).fill(0)
    );

    const solve = (l, r) => {
        if (l > r) return 0;

        if (dp[l][r] !== 0) return dp[l][r];

        // print s[l] separately
        let ans = 1 + solve(l + 1, r);

        // merge same chars
        for (let k = l + 1; k <= r; k++) {
            if (s[k] === s[l]) {
                ans = Math.min(
                    ans,
                    solve(l + 1, k - 1) + solve(k, r)
                );
            }
        }

        return dp[l][r] = ans;
    };

    return solve(0, n - 1);
};