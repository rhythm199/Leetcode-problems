/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;

    if (k >= m + n - 2) return m + n - 2;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = Array.from({ length: m }, () =>
        Array.from({ length: n }, () => -1)
    );

    const queue = [[0, 0, k, 0]];
    visited[0][0] = k;

    while (queue.length) {
        const [x, y, rem, steps] = queue.shift();

        if (x === m - 1 && y === n - 1) {
            return steps;
        }

        for (const [dx, dy] of dirs) {
            const nx = x + dx;
            const ny = y + dy;

            if (
                nx >= 0 &&
                ny >= 0 &&
                nx < m &&
                ny < n
            ) {
                const nextRem = rem - grid[nx][ny];

                if (
                    nextRem >= 0 &&
                    visited[nx][ny] < nextRem
                ) {
                    visited[nx][ny] = nextRem;
                    queue.push([nx, ny, nextRem, steps + 1]);
                }
            }
        }
    }

    return -1;
};