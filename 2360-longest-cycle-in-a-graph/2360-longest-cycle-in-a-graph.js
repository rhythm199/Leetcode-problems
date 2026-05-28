/**
 * @param {number[]} edges
 * @return {number}
 */
var longestCycle = function(edges) {
    const n = edges.length;

    const visited = new Array(n).fill(false);

    let ans = -1;

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        let curr = i;
        let step = 0;

        const map = new Map();

        while (curr !== -1 && !visited[curr]) {
            visited[curr] = true;

            map.set(curr, step++);

            curr = edges[curr];

            if (curr !== -1 && map.has(curr)) {
                ans = Math.max(ans, step - map.get(curr));
                break;
            }
        }
    }

    return ans;
};