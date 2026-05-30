/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    let ans = 0;

    for (const num of nums) {
        if (num % 2 === 0) {
            ans |= num;
        }
    }

    return ans;
};