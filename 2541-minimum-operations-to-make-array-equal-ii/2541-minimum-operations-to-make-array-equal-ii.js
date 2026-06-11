/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums1, nums2, k) {
    const n = nums1.length;

    if (k === 0) {
        for (let i = 0; i < n; i++) {
            if (nums1[i] !== nums2[i]) return -1;
        }
        return 0;
    }

    let pos = 0;
    let neg = 0;

    for (let i = 0; i < n; i++) {
        const diff = nums1[i] - nums2[i];

        if (diff % k !== 0) return -1;

        if (diff > 0) pos += diff / k;
        else neg += (-diff) / k;
    }

    return pos === neg ? pos : -1;
};