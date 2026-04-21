/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
/**
 * @param {number[]} source
 * @param {number[]} target
 * @param {number[][]} allowedSwaps
 * @return {number}
 */
var minimumHammingDistance = function (source, target, allowedSwaps) {
    const n = source.length;
    const parent = Array.from({ length: n }, (_, i) => i);

    function find(x) {
        if (parent[x] !== x) parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(a, b) {
        let pa = find(a), pb = find(b);
        if (pa !== pb) parent[pa] = pb;
    }

    for (let [a, b] of allowedSwaps) {
        union(a, b);
    }

    const map = new Map();

    for (let i = 0; i < n; i++) {
        let p = find(i);
        if (!map.has(p)) map.set(p, new Map());
        let m = map.get(p);
        m.set(source[i], (m.get(source[i]) || 0) + 1);
    }

    let ans = 0;

    for (let i = 0; i < n; i++) {
        let p = find(i);
        let m = map.get(p);

        if (m.get(target[i]) > 0) {
            m.set(target[i], m.get(target[i]) - 1);
        } else {
            ans++;
        }
    }

    return ans;
};