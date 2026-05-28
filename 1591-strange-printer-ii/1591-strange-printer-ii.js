/**
 * @param {number[][]} targetGrid
 * @return {boolean}
 */
var isPrintable = function(targetGrid) {
    const m = targetGrid.length;
    const n = targetGrid[0].length;

    const MAX = 61;

    const top = Array(MAX).fill(Infinity);
    const left = Array(MAX).fill(Infinity);
    const bottom = Array(MAX).fill(-1);
    const right = Array(MAX).fill(-1);

    // Find bounding rectangle for each color
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            const c = targetGrid[i][j];

            top[c] = Math.min(top[c], i);
            left[c] = Math.min(left[c], j);
            bottom[c] = Math.max(bottom[c], i);
            right[c] = Math.max(right[c], j);
        }
    }
    const graph = Array.from({ length: MAX }, () => new Set());
    const indegree = Array(MAX).fill(0);

    for (let color = 1; color < MAX; color++) {
        if (bottom[color] === -1) continue;

        for (let i = top[color]; i <= bottom[color]; i++) {
            for (let j = left[color]; j <= right[color]; j++) {
                const other = targetGrid[i][j];

                if (other !== color && !graph[color].has(other)) {
                    graph[color].add(other);
                    indegree[other]++;
                }
            }
        }
    }

    // Topological sort
    const queue = [];

    for (let color = 1; color < MAX; color++) {
        if (bottom[color] !== -1 && indegree[color] === 0) {
            queue.push(color);
        }
    }

    let count = 0;

    while (queue.length) {
        const color = queue.shift();
        count++;

        for (const next of graph[color]) {
            indegree[next]--;

            if (indegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    let totalColors = 0;

    for (let color = 1; color < MAX; color++) {
        if (bottom[color] !== -1) {
            totalColors++;
        }
    }

    return count === totalColors;
};