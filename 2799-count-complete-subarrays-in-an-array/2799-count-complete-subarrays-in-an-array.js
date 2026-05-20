/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {

    const totalDistinct = new Set(nums).size;

    const freq = new Map();

    let left = 0;
    let answer = 0;

    for (let right = 0; right < nums.length; right++) {

        freq.set(
            nums[right],
            (freq.get(nums[right]) || 0) + 1
        );

        while (freq.size === totalDistinct) {

            answer += nums.length - right;

            freq.set(
                nums[left],
                freq.get(nums[left]) - 1
            );

            if (freq.get(nums[left]) === 0) {
                freq.delete(nums[left]);
            }

            left++;
        }
    }

    return answer;
};