/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
    let left = Math.max(...nums);
    let right = nums.reduce((a, b) => a + b, 0);

    const canSplit = (maxSum) => {
        let parts = 1;
        let curr = 0;

        for (const num of nums) {
            if (curr + num > maxSum) {
                parts++;
                curr = num;
            } else {
                curr += num;
            }
        }

        return parts <= k;
    };

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (canSplit(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};