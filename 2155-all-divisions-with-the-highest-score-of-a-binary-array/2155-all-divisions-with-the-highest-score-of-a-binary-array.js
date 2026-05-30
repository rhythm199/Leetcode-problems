/**
 * @param {number[]} nums
 * @return {number[]}
 */
var maxScoreIndices = function(nums) {
    let rightOnes = nums.reduce((a, b) => a + b, 0);
    let leftZeros = 0;

    let maxScore = -1;
    let ans = [];

    for (let i = 0; i <= nums.length; i++) {
        const score = leftZeros + rightOnes;

        if (score > maxScore) {
            maxScore = score;
            ans = [i];
        } else if (score === maxScore) {
            ans.push(i);
        }

        if (i < nums.length) {
            if (nums[i] === 0) leftZeros++;
            else rightOnes--;
        }
    }

    return ans;
};