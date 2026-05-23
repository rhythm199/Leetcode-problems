/**
 * @param {number[]} nums
 * @return {number}
 */

var minOperations = function(nums) {

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let n = nums.length;

    let ones = nums.filter(x => x === 1).length;

    if (ones > 0) {
        return n - ones;
    }

    let minLen = Infinity;

    for (let i = 0; i < n; i++) {

        let g = nums[i];

        for (let j = i; j < n; j++) {

            g = gcd(g, nums[j]);

            if (g === 1) {
                minLen = Math.min(minLen, j - i + 1);
                break;
            }
        }
    }

    if (minLen === Infinity) {
        return -1;
    }

    return (minLen - 1) + (n - 1);
};