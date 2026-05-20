/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {

    const arr = nums.map((num, i) => [num, cost[i]]);

    arr.sort((a, b) => a[0] - b[0]);

    let totalCost = cost.reduce((a, b) => a + b, 0);

    let prefix = 0;
    let target = 0;

    for (const [num, c] of arr) {

        prefix += c;

        if (prefix >= totalCost / 2) {
            target = num;
            break;
        }
    }

    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        answer += Math.abs(nums[i] - target) * cost[i];
    }

    return answer;
};