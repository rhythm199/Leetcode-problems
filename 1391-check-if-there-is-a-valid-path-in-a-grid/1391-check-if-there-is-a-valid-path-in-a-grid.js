/**
 * @param {number[][]} grid
 * @return {boolean}
 */
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    
    const directions = {
        1: [[0, -1], [0, 1]],
        2: [[-1, 0], [1, 0]],
        3: [[0, -1], [1, 0]],
        4: [[0, 1], [1, 0]],  
        5: [[0, -1], [-1, 0]], 
        6: [[0, 1], [-1, 0]]  
    };

    const queue = [[0, 0]];
    const visited = new Set(['0,0']);

    while (queue.length > 0) {
        const [r, c] = queue.shift();
        if (r === m - 1 && c === n - 1) return true;
        const currentType = grid[r][c];
        for (const [dr, dc] of directions[currentType]) {
            const nr = r + dr;
            const nc = c + dc;
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && !visited.has(`${nr},${nc}`)) {
                const nextType = grid[nr][nc];
                let canConnectBack = false;
                for (const [ndr, ndc] of directions[nextType]) {
                    if (nr + ndr === r && nc + ndc === c) {
                        canConnectBack = true;
                        break;
                    }
                }

                if (canConnectBack) {
                    visited.add(`${nr},${nc}`);
                    queue.push([nr, nc]);
                }
            }
        }
    }
    return false;
};