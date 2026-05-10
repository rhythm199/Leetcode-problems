/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;

    const dp = Array(n).fill(0);
    dp[0] = nums[0];

    const deque = [0];

    for (let i = 1; i < n; i++) {

        while (deque.length && deque[0] < i - k) {
            deque.shift();
        }

        dp[i] = dp[deque[0]] + nums[i];

        while (
            deque.length &&
            dp[deque[deque.length - 1]] <= dp[i]
        ) {
            deque.pop();
        }

        deque.push(i);
    }

    return dp[n - 1];
};