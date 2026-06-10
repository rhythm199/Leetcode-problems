/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minKBitFlips = function(nums, k) {
    const n = nums.length;

    let flips = 0;
    let activeFlips = 0;

    const isFlipStart = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {

        if (i >= k) {
            activeFlips -= isFlipStart[i - k];
        }

        const currentBit =
            activeFlips % 2 === 0 ? nums[i] : 1 - nums[i];

        if (currentBit === 0) {

            if (i + k > n) {
                return -1;
            }

            flips++;
            activeFlips++;
            isFlipStart[i] = 1;
        }
    }

    return flips;
};