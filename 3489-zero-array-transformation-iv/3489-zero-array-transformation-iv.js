/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    const n = nums.length;

    if (nums.every(x => x === 0)) return 0;

    const possible = Array.from({ length: n }, () => new Set([0]));

    for (let k = 0; k < queries.length; k++) {
        const [l, r, val] = queries[k];

        for (let i = l; i <= r; i++) {
            const next = new Set(possible[i]);

            for (const s of possible[i]) {
                const ns = s + val;

                if (ns <= nums[i]) {
                    next.add(ns);
                }
            }

            possible[i] = next;
        }

        let ok = true;

        for (let i = 0; i < n; i++) {
            if (!possible[i].has(nums[i])) {
                ok = false;
                break;
            }
        }

        if (ok) return k + 1;
    }

    return -1;
};