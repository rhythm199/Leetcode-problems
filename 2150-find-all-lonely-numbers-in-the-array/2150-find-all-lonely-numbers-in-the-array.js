/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const result = [];

    for (const num of nums) {
        if (
            freq.get(num) === 1 &&
            !freq.has(num - 1) &&
            !freq.has(num + 1)
        ) {
            result.push(num);
        }
    }

    return result;
};