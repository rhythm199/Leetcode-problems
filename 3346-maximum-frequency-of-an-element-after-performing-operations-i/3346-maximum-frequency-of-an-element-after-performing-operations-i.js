/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function(nums, k, numOperations) {
    let mx = Math.max(...nums);
    let n = mx + k + 2;
    let f = Array(n).fill(0);
    for (let x of nums) f[x]++;
    let pre = Array(n).fill(0);
    pre[0] = f[0];
    for (let i = 1; i < n; i++) pre[i] = pre[i - 1] + f[i];
    let ans = 0;
    for (let t = 0; t < n; t++) {
        if (f[t] == 0 && numOperations == 0) continue;
        let l = Math.max(0, t - k), r = Math.min(n - 1, t + k);
        let tot = pre[r] - (l > 0 ? pre[l - 1] : 0);
        let adj = tot - f[t];
        let val = f[t] + Math.min(numOperations, adj);
        ans = Math.max(ans, val);
    }
    return ans;
};