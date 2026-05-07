/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    const n = nums.length;
    let maxSum = 0;
    for (let k = 1; k <= n; k++) {
        let currentSum = 0;
        let s = 1;
        while (k * s * s <= n) {
            currentSum += nums[k * s * s - 1];
            s++;
        }
        
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};