/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(0);
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], { count: 0, sum: 0 });
        }
        const data = map.get(nums[i]);
        res[i] += data.count * i - data.sum;
        data.count++;
        data.sum += i;
    }

    map.clear();

    for (let i = n - 1; i >= 0; i--) {
        if (!map.has(nums[i])) {
            map.set(nums[i], { count: 0, sum: 0 });
        }
        const data = map.get(nums[i]);
        res[i] += data.sum - data.count * i;
        data.count++;
        data.sum += i;
    }

    return res;
};