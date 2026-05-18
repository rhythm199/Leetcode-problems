/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProd = nums[0];
    let currMax = nums[0];
    let currMin = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];

        if (num < 0) {
            [currMax, currMin] = [currMin, currMax];
        }

        currMax = Math.max(num, currMax * num);
        currMin = Math.min(num, currMin * num);

        maxProd = Math.max(maxProd, currMax);
    }

    return maxProd;
};