/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let third = -Infinity;

    for (let i = nums.length - 1; i >= 0; i--) {

        if (nums[i] < third) return true;

        while (
            stack.length &&
            nums[i] > stack[stack.length - 1]
        ) {
            third = stack.pop();
        }

        stack.push(nums[i]);
    }

    return false;
};