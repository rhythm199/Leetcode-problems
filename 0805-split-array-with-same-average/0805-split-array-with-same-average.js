/**
 * @param {number[]} nums
 * @return {boolean}
 */
var splitArraySameAverage = function(nums) {
    const n = nums.length;
    const total = nums.reduce((a, b) => a + b, 0);

    // dp[k] = set of possible sums using k elements
    const dp = Array.from({ length: n + 1 }, () => new Set());
    dp[0].add(0);

    for (const num of nums) {
        for (let k = n - 1; k >= 1; k--) {
            for (const sum of dp[k - 1]) {
                dp[k].add(sum + num);
            }
        }
    }

    // Check possible subset sizes
    for (let k = 1; k <= Math.floor(n / 2); k++) {
        // Required sum for same average
        if ((total * k) % n !== 0) continue;

        const target = (total * k) / n;

        if (dp[k].has(target)) {
            return true;
        }
    }

    return false;
};