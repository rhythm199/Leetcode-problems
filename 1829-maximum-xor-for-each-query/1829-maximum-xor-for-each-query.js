/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function(nums, maximumBit) {
    let xor = 0;

    for (const num of nums) {
        xor ^= num;
    }

    const mask = (1 << maximumBit) - 1;
    const ans = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        ans.push(xor ^ mask);
        xor ^= nums[i];
    }

    return ans;
};