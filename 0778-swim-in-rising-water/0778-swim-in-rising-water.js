/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;

    const heap = [[grid[0][0], 0, 0]];
    const visited = Array.from({ length: n }, () =>
        Array(n).fill(false)
    );

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    while (heap.length) {
        heap.sort((a, b) => a[0] - b[0]);

        const [time, r, c] = heap.shift();

        if (visited[r][c]) continue;
        visited[r][c] = true;

        if (r === n - 1 && c === n - 1) {
            return time;
        }

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nc >= 0 &&
                nr < n &&
                nc < n &&
                !visited[nr][nc]
            ) {
                heap.push([
                    Math.max(time, grid[nr][nc]),
                    nr,
                    nc
                ]);
            }
        }
    }
};