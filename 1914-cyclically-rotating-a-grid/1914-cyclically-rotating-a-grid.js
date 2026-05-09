/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var rotateGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const layers = Math.min(m, n) / 2;

    for (let layer = 0; layer < layers; layer++) {
        const arr = [];

        const top = layer;
        const left = layer;
        const bottom = m - layer - 1;
        const right = n - layer - 1;

        for (let j = left; j <= right; j++) {
            arr.push(grid[top][j]);
        }

        for (let i = top + 1; i <= bottom - 1; i++) {
            arr.push(grid[i][right]);
        }

        for (let j = right; j >= left; j--) {
            arr.push(grid[bottom][j]);
        }

        for (let i = bottom - 1; i >= top + 1; i--) {
            arr.push(grid[i][left]);
        }

        const len = arr.length;
        const shift = k % len;
        const rotated = arr.slice(shift).concat(arr.slice(0, shift));

        let idx = 0;

        for (let j = left; j <= right; j++) {
            grid[top][j] = rotated[idx++];
        }

        for (let i = top + 1; i <= bottom - 1; i++) {
            grid[i][right] = rotated[idx++];
        }

        for (let j = right; j >= left; j--) {
            grid[bottom][j] = rotated[idx++];
        }

        for (let i = bottom - 1; i >= top + 1; i--) {
            grid[i][left] = rotated[idx++];
        }
    }

    return grid;
};