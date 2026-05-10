/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    if (valueDiff < 0) return false;

    const buckets = new Map();
    const size = valueDiff + 1;

    function getBucketId(num) {
        return Math.floor(num / size);
    }

    for (let i = 0; i < nums.length; i++) {

        const id = getBucketId(nums[i]);

        if (buckets.has(id)) {
            return true;
        }

        if (
            buckets.has(id - 1) &&
            Math.abs(nums[i] - buckets.get(id - 1)) <= valueDiff
        ) {
            return true;
        }

        if (
            buckets.has(id + 1) &&
            Math.abs(nums[i] - buckets.get(id + 1)) <= valueDiff
        ) {
            return true;
        }

        buckets.set(id, nums[i]);

        if (i >= indexDiff) {
            buckets.delete(getBucketId(nums[i - indexDiff]));
        }
    }

    return false;
};