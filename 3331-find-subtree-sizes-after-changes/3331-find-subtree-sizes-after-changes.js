/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function(parent, s) {

    const n = parent.length;

    // original tree
    const tree = Array.from({ length: n }, () => []);

    for (let i = 1; i < n; i++) {
        tree[parent[i]].push(i);
    }

    // new parent array
    const newParent = [...parent];

    // track latest ancestor for each char
    const charMap = new Map();

    function dfs(node) {

        const ch = s[node];

        let prev = charMap.get(ch);

        if (prev !== undefined) {
            newParent[node] = prev;
        }

        charMap.set(ch, node);

        for (let child of tree[node]) {
            dfs(child);
        }

        // backtrack
        if (prev !== undefined) {
            charMap.set(ch, prev);
        } else {
            charMap.delete(ch);
        }
    }

    dfs(0);

    // rebuild updated tree
    const newTree = Array.from({ length: n }, () => []);

    for (let i = 1; i < n; i++) {
        newTree[newParent[i]].push(i);
    }

    // compute subtree sizes
    const ans = new Array(n).fill(1);

    function dfsSize(node) {

        for (let child of newTree[node]) {
            dfsSize(child);
            ans[node] += ans[child];
        }
    }

    dfsSize(0);

    return ans;
};