/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfSubsequences = function(nums) {
    const n = nums.length;
    let ans = 0;

    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    const map = new Map();

    for (let r = 4; r < n - 2; r++) {
        const q = r - 2;

        for (let p = 0; p < q - 1; p++) {
            const g = gcd(nums[p], nums[q]);

            const key =
                (nums[p] / g) + "#" + (nums[q] / g);

            map.set(key, (map.get(key) || 0) + 1);
        }

        for (let s = r + 2; s < n; s++) {
            const g = gcd(nums[s], nums[r]);

            const key =
                (nums[s] / g) + "#" + (nums[r] / g);

            ans += map.get(key) || 0;
        }
    }

    return ans;
};