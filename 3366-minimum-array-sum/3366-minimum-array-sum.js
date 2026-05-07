/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
var minArraySum = function(nums, k, op1, op2) {
    const n = nums.length;
    const memo = Array.from({ length: n }, () => 
        Array.from({ length: op1 + 1 }, () => new Array(op2 + 1).fill(-1))
    );

    function solve(i, o1, o2) {
        if (i === n) return 0;
        if (memo[i][o1][o2] !== -1) return memo[i][o1][o2];
        let res = nums[i] + solve(i + 1, o1, o2);
        if (o1 > 0) {
            res = Math.min(res, Math.ceil(nums[i] / 2) + solve(i + 1, o1 - 1, o2));
        }
        if (o2 > 0 && nums[i] >= k) {
            res = Math.min(res, (nums[i] - k) + solve(i + 1, o1, o2 - 1));
        }
        if (o1 > 0 && o2 > 0) {
            let afterOp1 = Math.ceil(nums[i] / 2);
            if (afterOp1 >= k) {
                res = Math.min(res, (afterOp1 - k) + solve(i + 1, o1 - 1, o2 - 1));
            }
        }
        if (o1 > 0 && o2 > 0 && nums[i] >= k) {
            let afterOp2 = nums[i] - k;
            res = Math.min(res, Math.ceil(afterOp2 / 2) + solve(i + 1, o1 - 1, o2 - 1));
        }

        return memo[i][o1][o2] = res;
    }

    return solve(0, op1, op2);
};