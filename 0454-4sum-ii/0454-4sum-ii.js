/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let map = new Map();

    for (let a of nums1) {
        for (let b of nums2) {

            let sum = a + b;

            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }

    let count = 0;

    for (let c of nums3) {
        for (let d of nums4) {

            let target = -(c + d);

            count += map.get(target) || 0;
        }
    }

    return count;
};