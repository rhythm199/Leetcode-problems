/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumTrionic = function(nums) {
    let result = -Infinity;

    let left = 0;
    let p = 0;
    let q = 0;

    let prefix = nums[0];

    for (let right = 1; right < nums.length; right++) {
        prefix += nums[right];

        if (nums[right - 1] > nums[right]) {

            if (
                right - 2 >= 0 &&
                nums[right - 2] < nums[right - 1]
            ) {
                p = right - 1;

                while (
                    left < q ||
                    (nums[left] < 0 && left + 1 < p)
                ) {
                    prefix -= nums[left++];
                }
            }

        } else if (nums[right - 1] < nums[right]) {

            if (
                right - 2 >= 0 &&
                nums[right - 2] > nums[right - 1]
            ) {
                q = right - 1;
            }

            if (left !== p) {
                result = Math.max(result, prefix);
            }

        } else {

            left = p = q = right;
            prefix = nums[right];
        }
    }

    return result;
};