/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {
    const n = nums.length;
    let ans = 0;

    for (let l = 0; l < n; l++) {
        let targetCount = 0;

        for (let r = l; r < n; r++) {
            if (nums[r] === target) {
                targetCount++;
            }

            const len = r - l + 1;

            if (targetCount > Math.floor(len / 2)) {
                ans++;
            }
        }
    }

    return ans;
};