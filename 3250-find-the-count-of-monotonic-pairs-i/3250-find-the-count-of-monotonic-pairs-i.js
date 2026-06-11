/**
 * @param {number[]} nums
 * @return {number}
 */
var countOfPairs = function(nums) {
    const MOD = 1000000007;
    const n = nums.length;
    const maxVal = Math.max(...nums);

    let dp = Array(maxVal + 1).fill(0);

    for (let x = 0; x <= nums[0]; x++) {
        dp[x] = 1;
    }

    for (let i = 1; i < n; i++) {
        const ndp = Array(maxVal + 1).fill(0);

        const pref = Array(maxVal + 1).fill(0);
        pref[0] = dp[0];

        for (let j = 1; j <= maxVal; j++) {
            pref[j] = (pref[j - 1] + dp[j]) % MOD;
        }

        for (let x = 0; x <= nums[i]; x++) {
            const limit =
                Math.min(
                    x,
                    nums[i - 1] - nums[i] + x
                );

            if (limit >= 0) {
                ndp[x] = pref[limit];
            }
        }

        dp = ndp;
    }

    return dp.reduce((a, b) => (a + b) % MOD, 0);
};