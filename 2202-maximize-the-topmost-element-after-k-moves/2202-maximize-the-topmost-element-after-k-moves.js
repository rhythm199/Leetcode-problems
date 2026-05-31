/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumTop = function(nums, k) {
    const n = nums.length;

    if (n === 1) {
        return k % 2 === 1 ? -1 : nums[0];
    }

    if (k === 0) {
        return nums[0];
    }

    let ans = -1;

    for (let i = 0; i < Math.min(n, k - 1); i++) {
        ans = Math.max(ans, nums[i]);
    }

    if (k < n) {
        ans = Math.max(ans, nums[k]);
    }

    return ans;
};