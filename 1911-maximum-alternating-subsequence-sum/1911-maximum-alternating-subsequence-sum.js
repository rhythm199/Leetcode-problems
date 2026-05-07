/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    let even = 0;
    let odd = 0;

    for (let x of nums) {
        even = Math.max(even, odd + x);
        odd = Math.max(odd, even - x);
    }
    
    return even;
};