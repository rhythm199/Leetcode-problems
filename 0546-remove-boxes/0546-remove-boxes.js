/**
 * @param {number[]} boxes
 * @return {number}
 */
var removeBoxes = function(boxes) {
    const n = boxes.length;

    const memo = new Map();

    const dfs = (l, r, k) => {
        if (l > r) return 0;

        const key = `${l},${r},${k}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        // merge same colored boxes at end
        while (r > l && boxes[r] === boxes[r - 1]) {
            r--;
            k++;
        }

        // remove current group now
        let ans = dfs(l, r - 1, 0) + (k + 1) * (k + 1);

        // try merging with same color before r
        for (let i = l; i < r; i++) {
            if (boxes[i] === boxes[r]) {
                ans = Math.max(
                    ans,
                    dfs(l, i, k + 1) + dfs(i + 1, r - 1, 0)
                );
            }
        }

        memo.set(key, ans);

        return ans;
    };

    return dfs(0, n - 1, 0);
};