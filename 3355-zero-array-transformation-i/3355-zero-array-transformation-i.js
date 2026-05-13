/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean}
 */
var isZeroArray = function(nums, queries) {
    const n = nums.length;
    const diff = new Array(n + 1).fill(0);

    for (const [l, r] of queries) {
        diff[l]++;

        if (r + 1 < diff.length) {
            diff[r + 1]--;
        }
    }

    let cover = 0;

    for (let i = 0; i < n; i++) {
        cover += diff[i];

        if (cover < nums[i]) {
            return false;
        }
    }

    return true;
};