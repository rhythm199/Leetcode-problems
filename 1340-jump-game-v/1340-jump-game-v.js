/**
 * @param {number[]} arr
 * @param {number} d
 * @return {number}
 */
var maxJumps = function(arr, d) {
    const n = arr.length;
    const dp = new Array(n).fill(-1);

    function dfs(i) {
        if (dp[i] !== -1) return dp[i];

        let best = 1;
        for (let j = i - 1; j >= Math.max(0, i - d); j--) {
            if (arr[j] >= arr[i]) break;

            best = Math.max(best, 1 + dfs(j));
        }
        for (let j = i + 1; j <= Math.min(n - 1, i + d); j++) {
            if (arr[j] >= arr[i]) break;

            best = Math.max(best, 1 + dfs(j));
        }

        dp[i] = best;
        return best;
    }

    let ans = 1;

    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, dfs(i));
    }

    return ans;
};