/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const buckets = Array(nums.length + 1)
        .fill(0)
        .map(() => []);

    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    const result = [];

    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);

            if (result.length === k) {
                return result;
            }
        }
    }

    return result;
};