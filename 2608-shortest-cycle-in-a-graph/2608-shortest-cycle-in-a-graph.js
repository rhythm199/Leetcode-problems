/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findShortestCycle = function(n, edges) {
    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    let ans = Infinity;

    for (let start = 0; start < n; start++) {
        const dist = Array(n).fill(-1);
        const parent = Array(n).fill(-1);

        const queue = [start];
        dist[start] = 0;

        while (queue.length) {
            const node = queue.shift();

            for (const nei of graph[node]) {
                if (dist[nei] === -1) {
                    dist[nei] = dist[node] + 1;
                    parent[nei] = node;
                    queue.push(nei);
                }
                else if (parent[node] !== nei) {
                    ans = Math.min(
                        ans,
                        dist[node] + dist[nei] + 1
                    );
                }
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};