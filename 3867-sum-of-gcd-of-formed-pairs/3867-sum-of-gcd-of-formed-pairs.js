/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    const n = nums.length;
    const prefixGcd = new Array(n);

    let mx = 0;

    for (let i = 0; i < n; i++) {
        mx = Math.max(mx, nums[i]);
        prefixGcd[i] = gcd(nums[i], mx);
    }

    prefixGcd.sort((a, b) => a - b);

    let l = 0, r = n - 1;
    let sum = 0;

    while (l < r) {
        sum += gcd(prefixGcd[l], prefixGcd[r]);
        l++;
        r--;
    }

    return sum;
};

function gcd(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}