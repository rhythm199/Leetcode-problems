/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var minOperations = function(nums, queries) {

    nums.sort((a, b) => a - b);

    const n = nums.length;

    const prefix = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    function lowerBound(target) {

        let left = 0;
        let right = n;

        while (left < right) {

            const mid = Math.floor((left + right) / 2);

            if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    const result = [];

    for (const q of queries) {

        const idx = lowerBound(q);

        const leftCost =
            q * idx - prefix[idx];

        const rightCost =
            (prefix[n] - prefix[idx]) -
            q * (n - idx);

        result.push(leftCost + rightCost);
    }

    return result;
};