/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {

    const n = nums.length;
    const dp = Array.from(
        { length: n },
        () => new Map()
    );

    let ans = 0;

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < i; j++) {

            let diff = nums[i] - nums[j];

            let prevCount =
                dp[j].get(diff) || 0;

            let currCount =
                dp[i].get(diff) || 0;

            ans += prevCount;
            dp[i].set(
                diff,
                currCount + prevCount + 1
            );
        }
    }

    return ans;
};