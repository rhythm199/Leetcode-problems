/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
var maximumScoreAfterOperations = function(edges, values) {
    const n = values.length;

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let total = values.reduce((a, b) => a + b, 0);

    function dfs(node, parent) {
        let childSum = 0;
        let isLeaf = true;

        for (const nei of graph[node]) {
            if (nei === parent) continue;

            isLeaf = false;
            childSum += dfs(nei, node);
        }

        if (isLeaf) return values[node];

        return Math.min(values[node], childSum);
    }

    return total - dfs(0, -1);
};