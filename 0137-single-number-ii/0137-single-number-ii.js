/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let sum = 0;

        for (let num of nums) {
            sum += (num >> i) & 1;
        }

        if (sum % 3 !== 0) {
            result |= (1 << i);
        }
    }

    return result;
};