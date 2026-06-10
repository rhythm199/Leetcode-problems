/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    let startRow, startCol;
    let totalKeys = 0;

    // Find start and count keys
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            const ch = grid[r][c];

            if (ch === '@') {
                startRow = r;
                startCol = c;
            }

            if (ch >= 'a' && ch <= 'f') {
                totalKeys = Math.max(
                    totalKeys,
                    ch.charCodeAt(0) - 'a'.charCodeAt(0) + 1
                );
            }
        }
    }

    const targetMask = (1 << totalKeys) - 1;

    const queue = [[startRow, startCol, 0, 0]]; // r, c, mask, steps
    const visited = new Set();
    visited.add(`${startRow},${startCol},0`);

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ];

    while (queue.length) {
        const [r, c, mask, steps] = queue.shift();

        if (mask === targetMask) {
            return steps;
        }

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n
            ) {
                continue;
            }

            const cell = grid[nr][nc];

            if (cell === '#') continue;

            let newMask = mask;

            // Collect key
            if (cell >= 'a' && cell <= 'f') {
                newMask |= 1 << (cell.charCodeAt(0) - 97);
            }

            // Door check
            if (cell >= 'A' && cell <= 'F') {
                const neededKey =
                    1 << (cell.charCodeAt(0) - 65);

                if ((mask & neededKey) === 0) {
                    continue;
                }
            }

            const state = `${nr},${nc},${newMask}`;

            if (!visited.has(state)) {
                visited.add(state);
                queue.push([
                    nr,
                    nc,
                    newMask,
                    steps + 1
                ]);
            }
        }
    }

    return -1;
};