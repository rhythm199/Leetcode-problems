/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplit = function(nums) {
    const MOD = 1e9 + 7;
    const n = nums.length;

    const prefix = Array(n).fill(0);
    prefix[0] = nums[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + nums[i];
    }

    let ans = 0;

    for (let i = 0; i < n - 2; i++) {
        let leftSum = prefix[i];

        let l = i + 1;
        let r = n - 2;

        while (l <= r) {
            const mid = (l + r) >> 1;

            const midSum = prefix[mid] - leftSum;

            if (midSum >= leftSum) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        const first = l;

        l = i + 1;
        r = n - 2;

        while (l <= r) {
            const mid = (l + r) >> 1;

            const midSum = prefix[mid] - leftSum;
            const rightSum = prefix[n - 1] - prefix[mid];

            if (midSum <= rightSum) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        const last = r;

        if (first <= last) {
            ans = (ans + (last - first + 1)) % MOD;
        }
    }

    return ans;
};