/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;

    let totalSum = 0;
    let f = 0;
    for (let i = 0; i < n; i++) {
        totalSum += nums[i];
        f += i * nums[i];
    }

    let maxVal = f;
    for (let k = 1; k < n; k++) {
        f = f + totalSum - n * nums[n - k];
        maxVal = Math.max(maxVal, f);
    }

    return maxVal;
};