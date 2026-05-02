/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let nums = [];
    let fact = [1];
    for (let i = 1; i <= n; i++) {
        nums.push(i.toString());
        fact[i] = fact[i - 1] * i;
    }

    k--;
    let res = "";

    for (let i = n; i > 0; i--) {
        let idx = Math.floor(k / fact[i - 1]);
        res += nums[idx];
        nums.splice(idx, 1);
        k %= fact[i - 1];
    }

    return res;
};