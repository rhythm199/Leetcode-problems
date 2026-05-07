/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    const n = s.length;
    const parent = Array.from({length: n}, (_, i) => i);
    const find = (i) => (parent[i] === i ? i : (parent[i] = find(parent[i])));
    
    for (const [u, v] of pairs) {
        const rootU = find(u), rootV = find(v);
        if (rootU !== rootV) parent[rootU] = rootV;
    }

    const groups = new Map();
    for (let i = 0; i < n; i++) {
        const root = find(i);
        if (!groups.has(root)) groups.set(root, { idx: [], chars: [] });
        groups.get(root).idx.push(i);
        groups.get(root).chars.push(s[i]);
    }

    const res = new Array(n);
    for (const group of groups.values()) {
        group.chars.sort();
        for (let i = 0; i < group.idx.length; i++) {
            res[group.idx[i]] = group.chars[i];
        }
    }
    return res.join('');
};