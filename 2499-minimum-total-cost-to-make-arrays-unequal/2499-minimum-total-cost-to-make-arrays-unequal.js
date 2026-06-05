/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var minimumTotalCost = function(nums1, nums2) {
    const n = nums1.length;

    const freq = new Map();

    let dominant = -1;
    let maxFreq = 0;

    let sameCount = 0;
    let cost = 0;

    for (let i = 0; i < n; i++) {
        if (nums1[i] === nums2[i]) {
            sameCount++;
            cost += i;

            const v = nums1[i];

            freq.set(v, (freq.get(v) || 0) + 1);

            if (freq.get(v) > maxFreq) {
                maxFreq = freq.get(v);
                dominant = v;
            }
        }
    }

    for (let i = 0; i < n && maxFreq > sameCount - maxFreq; i++) {

        if (
            nums1[i] !== nums2[i] &&
            nums1[i] !== dominant &&
            nums2[i] !== dominant
        ) {
            cost += i;
            sameCount++;
        }
    }

    return maxFreq > sameCount - maxFreq
        ? -1
        : cost;
};