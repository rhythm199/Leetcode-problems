/**
 * @param {number[]} values
 * @param {number[][]} edges
 * @param {number} maxTime
 * @return {number}
 */
var maximalPathQuality = function(values, edges, maxTime) {

    const n = values.length;

    const graph = Array.from(
        { length: n },
        () => []
    );

    for (const [u, v, time] of edges) {
        graph[u].push([v, time]);
        graph[v].push([u, time]);
    }

    let ans = values[0];

    const visited = new Array(n).fill(0);

    visited[0] = 1;

    function dfs(node, currTime, score) {

        if (node === 0) {
            ans = Math.max(ans, score);
        }

        for (const [next, travelTime] of graph[node]) {

            const newTime = currTime + travelTime;

            if (newTime > maxTime) continue;

            let gain = 0;

            if (visited[next] === 0) {
                gain = values[next];
            }

            visited[next]++;

            dfs(
                next,
                newTime,
                score + gain
            );

            visited[next]--;
        }
    }

    dfs(0, 0, values[0]);

    return ans;
};