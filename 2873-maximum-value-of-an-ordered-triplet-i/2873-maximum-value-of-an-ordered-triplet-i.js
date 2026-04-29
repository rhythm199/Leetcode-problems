/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumTripletValue = function(nums) {
     let ans = 0;
    let max_i = 0;
    let max_diff = 0;

    for (let x of nums) {
        ans = Math.max(ans, max_diff * x);
        max_diff = Math.max(max_diff, max_i - x);
        max_i = Math.max(max_i, x);
    }

    return ans;
};