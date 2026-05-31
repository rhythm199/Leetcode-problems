/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
    const MOD = 1000000007;

    const sorted = [...nums1].sort((a, b) => a - b);

    let total = 0;
    let gain = 0;

    for (let i = 0; i < nums1.length; i++) {
        const diff = Math.abs(nums1[i] - nums2[i]);

        total += diff;

        let l = 0;
        let r = sorted.length;

        while (l < r) {
            const mid = (l + r) >> 1;

            if (sorted[mid] < nums2[i]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        if (l < sorted.length) {
            gain = Math.max(
                gain,
                diff - Math.abs(sorted[l] - nums2[i])
            );
        }

        if (l > 0) {
            gain = Math.max(
                gain,
                diff - Math.abs(sorted[l - 1] - nums2[i])
            );
        }
    }

    return (total - gain) % MOD;
};