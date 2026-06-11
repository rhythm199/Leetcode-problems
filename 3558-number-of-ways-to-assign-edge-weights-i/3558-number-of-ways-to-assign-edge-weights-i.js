/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007n;
    const n = edges.length + 1;

    const graph = Array.from({ length: n + 1 }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let maxDepth = 0;

    const stack = [[1, 0]];
    const visited = Array(n + 1).fill(false);
    visited[1] = true;

    while (stack.length) {
        const [node, depth] = stack.pop();

        maxDepth = Math.max(maxDepth, depth);

        for (const next of graph[node]) {
            if (!visited[next]) {
                visited[next] = true;
                stack.push([next, depth + 1]);
            }
        }
    }

    let base = 2n;
    let exp = BigInt(maxDepth - 1);
    let result = 1n;

    while (exp > 0n) {
        if (exp & 1n) {
            result = (result * base) % MOD;
        }

        base = (base * base) % MOD;
        exp >>= 1n;
    }

    return Number(result);
};