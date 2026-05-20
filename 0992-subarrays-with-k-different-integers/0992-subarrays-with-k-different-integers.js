/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {

    function atMost(k) {

        const freq = new Map();

        let left = 0;
        let count = 0;

        for (let right = 0; right < nums.length; right++) {

            freq.set(
                nums[right],
                (freq.get(nums[right]) || 0) + 1
            );

            while (freq.size > k) {

                freq.set(
                    nums[left],
                    freq.get(nums[left]) - 1
                );

                if (freq.get(nums[left]) === 0) {
                    freq.delete(nums[left]);
                }

                left++;
            }

            count += right - left + 1;
        }

        return count;
    }

    return atMost(k) - atMost(k - 1);
};