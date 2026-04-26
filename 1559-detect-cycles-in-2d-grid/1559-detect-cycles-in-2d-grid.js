/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var containsCycle = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => new Uint8Array(cols));
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    const dfs = (r, c, pr, pc, char) => {
        visited[r][c] = 1;

        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === char) {
                if (visited[nr][nc] && (nr !== pr || nc !== pc)) {
                    return true;
                }
                if (!visited[nr][nc]) {
                    if (dfs(nr, nc, r, c, char)) return true;
                }
            }
        }
        return false;
    };
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j]) {
                if (dfs(i, j, -1, -1, grid[i][j])) return true;
            }
        }
    }

    return false;
};