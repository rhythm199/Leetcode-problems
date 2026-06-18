/**
 * @param {number} k
 * @param {number} n
 * @return {number}
 */
var superEggDrop = function(k, n) {
    const memo = new Map();

    const solve = (eggs, floors) => {
        if (floors <= 1 || eggs === 1) return floors;
        const key = `${eggs}-${floors}`;
        if (memo.has(key)) return memo.get(key);

        let low = 1, high = floors, ans = floors;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let left = solve(eggs - 1, mid - 1);
            let right = solve(eggs, floors - mid);

            ans = Math.min(ans, 1 + Math.max(left, right));
            if (left < right) low = mid + 1;
            else high = mid - 1;
        }
        memo.set(key, ans);
        return ans;
    };

    return solve(k, n);
};