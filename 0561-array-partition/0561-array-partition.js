/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);

    let maxSum = 0;

    for (let index = 0; index < nums.length; index += 2) {
        maxSum += nums[index];
    }

    return maxSum;
};