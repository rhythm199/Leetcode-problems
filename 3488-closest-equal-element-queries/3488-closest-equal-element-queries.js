/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
     const n = nums.length;
    const map = new Map();

    for (let i = 0; i < n; i++) {
        if (!map.has(nums[i])) map.set(nums[i], []);
        map.get(nums[i]).push(i);
    }

    const minDist = new Array(n).fill(Infinity);

    for (let indices of map.values()) {
        if (indices.length === 1) continue;

        let k = indices.length;

        for (let i = 0; i < k; i++) {
            let curr = indices[i];
            let next = indices[(i + 1) % k];
            let prev = indices[(i - 1 + k) % k];

            let distNext = Math.min(Math.abs(curr - next), n - Math.abs(curr - next));
            let distPrev = Math.min(Math.abs(curr - prev), n - Math.abs(curr - prev));

            minDist[curr] = Math.min(distNext, distPrev);
        }
    }

    return queries.map(q => minDist[q] === Infinity ? -1 : minDist[q]);
};