/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function(grid, health) {
    const m = grid.length;
    const n = grid[0].length;

    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

    const best = Array.from({ length: m }, () =>
        Array(n).fill(-1)
    );

    const queue = [[0, 0, health - grid[0][0]]];

    best[0][0] = health - grid[0][0];

    while (queue.length) {
        const [x, y, hp] = queue.shift();

        if (x === m - 1 && y === n - 1 && hp > 0) {
            return true;
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
                const nhp = hp - grid[nx][ny];

                if (nhp > 0 && nhp > best[nx][ny]) {
                    best[nx][ny] = nhp;
                    queue.push([nx, ny, nhp]);
                }
            }
        }
    }

    return false;
};