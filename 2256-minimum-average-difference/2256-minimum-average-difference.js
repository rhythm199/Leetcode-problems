/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    const n = nums.length;

    let total = nums.reduce((a, b) => a + b, 0);

    let prefix = 0;
    let ans = 0;
    let minDiff = Infinity;

    for (let i = 0; i < n; i++) {
        prefix += nums[i];

        const leftAvg = Math.floor(prefix / (i + 1));

        const rightSum = total - prefix;
        const rightCount = n - i - 1;

        const rightAvg =
            rightCount === 0 ? 0 : Math.floor(rightSum / rightCount);

        const diff = Math.abs(leftAvg - rightAvg);

        if (diff < minDiff) {
            minDiff = diff;
            ans = i;
        }
    }

    return ans;
};