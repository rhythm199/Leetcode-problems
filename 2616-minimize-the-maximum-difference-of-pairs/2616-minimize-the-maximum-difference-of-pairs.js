/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    nums.sort((a, b) => a - b);

    let low = 0;
    let high = nums[nums.length - 1] - nums[0];

    const canFormPairs = (maxDiff) => {
        let pairCount = 0;

        for (let idx = 1; idx < nums.length; idx++) {
            if (nums[idx] - nums[idx - 1] <= maxDiff) {
                pairCount++;
                idx++;
            }
        }

        return pairCount >= p;
    };

    while (low < high) {
        const mid = Math.floor((low + high) / 2);

        if (canFormPairs(mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};