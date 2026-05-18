/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let prev1 = 0; // dp[i-1]
    let prev2 = 0; // dp[i-2]

    for (let num of nums) {

        let curr = Math.max(prev1, prev2 + num);

        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
};