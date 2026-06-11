/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0];

    const graph = Array.from({ length: n }, () => []);
    const degree = Array(n).fill(0);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
        degree[u]++;
        degree[v]++;
    }

    let leaves = [];

    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) leaves.push(i);
    }

    let remaining = n;

    while (remaining > 2) {
        remaining -= leaves.length;

        const next = [];

        for (const node of leaves) {
            for (const nei of graph[node]) {
                degree[nei]--;

                if (degree[nei] === 1) {
                    next.push(nei);
                }
            }
        }

        leaves = next;
    }

    return leaves;
};