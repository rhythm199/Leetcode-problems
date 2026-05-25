/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function(nums) {
    let left = 0;
    let mask = 0;
    let ans = 0;

    for (let right = 0; right < nums.length; right++) {

        while ((mask & nums[right]) !== 0) {
            mask ^= nums[left];
            left++;
        }

        mask |= nums[right];

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};