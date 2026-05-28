/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const map = new Map();

    map.set(0, 1);

    let prefix = 0;
    let ans = 0;

    for (const num of nums) {
        prefix += num;

        let rem = prefix % k;
        if (rem < 0) rem += k;

        ans += map.get(rem) || 0;

        map.set(rem, (map.get(rem) || 0) + 1);
    }

    return ans;
};