/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    let n = nums.length;
    let total = 0;

    for (let i = 0; i < 32; i++) {
        let ones = 0;

        for (let num of nums) {
            if ((num >> i) & 1) ones++;
        }

        total += ones * (n - ones);
    }

    return total;
};