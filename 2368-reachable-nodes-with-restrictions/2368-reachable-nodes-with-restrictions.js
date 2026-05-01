/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function(n, edges, restricted) {
    const graph = Array.from({ length: n }, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const restrictedSet = new Set(restricted);
    const visited = new Set();

    function dfs(node) {
        if (restrictedSet.has(node) || visited.has(node)) return 0;

        visited.add(node);

        let count = 1;

        for (let nei of graph[node]) {
            count += dfs(nei);
        }

        return count;
    }

    return dfs(0);
};