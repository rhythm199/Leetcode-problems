/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function(fruits, baskets) {
    const n = baskets.length;
    const seg = new Array(4 * n).fill(0);

    const build = (idx, l, r) => {
        if (l === r) {
            seg[idx] = baskets[l];
            return;
        }

        const mid = (l + r) >> 1;

        build(idx * 2 + 1, l, mid);
        build(idx * 2 + 2, mid + 1, r);

        seg[idx] = Math.max(
            seg[idx * 2 + 1],
            seg[idx * 2 + 2]
        );
    };

    const update = (idx, l, r, pos) => {
        if (l === r) {
            seg[idx] = -1;
            return;
        }

        const mid = (l + r) >> 1;

        if (pos <= mid) {
            update(idx * 2 + 1, l, mid, pos);
        } else {
            update(idx * 2 + 2, mid + 1, r, pos);
        }

        seg[idx] = Math.max(
            seg[idx * 2 + 1],
            seg[idx * 2 + 2]
        );
    };

    const query = (idx, l, r, target) => {
        if (seg[idx] < target) return -1;

        if (l === r) return l;

        const mid = (l + r) >> 1;

        if (seg[idx * 2 + 1] >= target) {
            return query(idx * 2 + 1, l, mid, target);
        }

        return query(
            idx * 2 + 2,
            mid + 1,
            r,
            target
        );
    };

    build(0, 0, n - 1);

    let unplaced = 0;

    for (const fruit of fruits) {
        const pos = query(0, 0, n - 1, fruit);

        if (pos === -1) {
            unplaced++;
        } else {
            update(0, 0, n - 1, pos);
        }
    }

    return unplaced;
};