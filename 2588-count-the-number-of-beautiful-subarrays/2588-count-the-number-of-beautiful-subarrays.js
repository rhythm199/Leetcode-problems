/**
 * @param {number[]} nums
 * @return {number}
 */
var beautifulSubarrays = function(nums) {
    let xor = 0;
    let ans = 0;

    const freq = new Map();
    freq.set(0, 1);

    for (const num of nums) {
        xor ^= num;

        ans += freq.get(xor) || 0;

        freq.set(xor, (freq.get(xor) || 0) + 1);
    }

    return ans;
};