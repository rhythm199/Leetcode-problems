/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var isPossibleDivide = function(nums, k) {
    if (nums.length % k !== 0) return false;

    nums.sort((a, b) => a - b);

    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    for (const num of nums) {
        if (freq.get(num) === 0) continue;

        for (let i = 0; i < k; i++) {
            const cur = num + i;

            if (!freq.get(cur)) {
                return false;
            }

            freq.set(cur, freq.get(cur) - 1);
        }
    }

    return true;
};