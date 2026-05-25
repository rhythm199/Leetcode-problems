/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequencyScore = function(nums, k) {
    nums.sort((a, b) => a - b);

    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    let ans = 1;
    let left = 0;

    for (let right = 0; right < n; right++) {

        while (left <= right && getCost(left, right) > k) {
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;

    function getCost(l, r) {
        const mid = Math.floor((l + r) / 2);
        const median = nums[mid];

        const leftCost =
            median * (mid - l) -
            (prefix[mid] - prefix[l]);

        const rightCost =
            (prefix[r + 1] - prefix[mid + 1]) -
            median * (r - mid);

        return leftCost + rightCost;
    }
};