/**
 * @param {number[]} nums
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(nums) {
    let rem = 0;
    const result = [];

    for (const bit of nums) {
        rem = (rem * 2 + bit) % 5;
        result.push(rem === 0);
    }

    return result;
};