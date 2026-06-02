/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    let best = nums[0];
    let ans = 0;

    for (let i = 1; i < nums.length; i++) {
        ans += best;
        best = Math.max(best, nums[i]);
    }

    return ans;
};