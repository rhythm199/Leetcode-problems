/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const MOD = 1000000007n;

var minMaxSums = function(nums, k) {

    nums.sort((a, b) => a - b);

    let n = nums.length;

    let fact = Array(n + 1).fill(1n);
    let invFact = Array(n + 1).fill(1n);

    const modPow = (a, b) => {

        let res = 1n;
        a %= MOD;

        while (b > 0n) {

            if (b & 1n) {
                res = (res * a) % MOD;
            }

            a = (a * a) % MOD;
            b >>= 1n;
        }

        return res;
    };

    for (let i = 1; i <= n; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD;
    }

    invFact[n] = modPow(fact[n], MOD - 2n);

    for (let i = n - 1; i >= 0; i--) {
        invFact[i] = (invFact[i + 1] * BigInt(i + 1)) % MOD;
    }

    const nCr = (n, r) => {

        if (r < 0 || r > n) {
            return 0n;
        }

        return (((fact[n] * invFact[r]) % MOD) * invFact[n - r]) % MOD;
    };

    let ans = 0n;

    for (let i = 0; i < n; i++) {

        let waysMax = 0n;
        let waysMin = 0n;

        for (let len = 1; len <= k; len++) {

            waysMax = (waysMax + nCr(i, len - 1)) % MOD;

            waysMin = (waysMin + nCr(n - i - 1, len - 1)) % MOD;
        }

        ans =
            (ans +
                BigInt(nums[i]) * ((waysMax + waysMin) % MOD)) %
            MOD;
    }

    return Number(ans);
};