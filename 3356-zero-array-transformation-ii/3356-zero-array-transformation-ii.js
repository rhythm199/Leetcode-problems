/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    const n = nums.length;

    function canMakeZero(k) {
        const diff = new Array(n + 1).fill(0);

        for (let i = 0; i < k; i++) {
            const [l, r, val] = queries[i];
            diff[l] += val;

            if (r + 1 < diff.length) {
                diff[r + 1] -= val;
            }
        }

        let curr = 0;

        for (let i = 0; i < n; i++) {
            curr += diff[i];

            if (curr < nums[i]) {
                return false;
            }
        }

        return true;
    }

    let left = 0;
    let right = queries.length;

    if (!canMakeZero(right)) return -1;

    while (left < right) {
         const mid = Math.floor((left + right) / 2);

        if (canMakeZero(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};