/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);

    let left = 0;
    let ans = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        left += nums[i];

        let right = total - left;

        if (left >= right) {
            ans++;
        }
    }

    return ans;
};