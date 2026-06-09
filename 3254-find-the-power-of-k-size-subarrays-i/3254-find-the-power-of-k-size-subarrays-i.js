/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {
    const n = nums.length;
    const result = [];

    for (let i = 0; i <= n - k; i++) {
        let valid = true;

        for (let j = i + 1; j < i + k; j++) {
            if (nums[j] !== nums[j - 1] + 1) {
                valid = false;
                break;
            }
        }

        result.push(valid ? nums[i + k - 1] : -1);
    }

    return result;
};