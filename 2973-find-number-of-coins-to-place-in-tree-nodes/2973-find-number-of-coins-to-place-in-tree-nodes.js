/**
 * @param {number[][]} edges
 * @param {number[]} cost
 * @return {number[]}
 */
var placedCoins = function(edges, cost) {
    const n = cost.length;

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const ans = Array(n).fill(0);

    function dfs(node, parent) {
        let vals = [cost[node]];
        let size = 1;

        for (const nei of graph[node]) {
            if (nei === parent) continue;

            const [childVals, childSize] = dfs(nei, node);

            size += childSize;
            vals.push(...childVals);
        }

        vals.sort((a, b) => a - b);

        if (size < 3) {
            ans[node] = 1;
        } else {
            const m = vals.length;

            let best = Number.MIN_SAFE_INTEGER;

            if (m >= 3) {
                best = Math.max(
                    best,
                    vals[m - 1] * vals[m - 2] * vals[m - 3]
                );

                best = Math.max(
                    best,
                    vals[m - 1] * vals[0] * vals[1]
                );
            }

            ans[node] = Math.max(0, best);
        }

        const keep = [];

        for (let i = 0; i < Math.min(2, vals.length); i++) {
            keep.push(vals[i]);
        }

        for (
            let i = Math.max(2, vals.length - 3);
            i < vals.length;
            i++
        ) {
            keep.push(vals[i]);
        }

        return [keep, size];
    }

    dfs(0, -1);

    return ans;
};