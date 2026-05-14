/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var canPartitionGrid = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let total = 0;

    for (let row of grid) {
        for (let val of row) {
            total += val;
        }
    }

    let curr = 0;

    for (let i = 0; i < m - 1; i++) {
        curr += grid[i].reduce((a, b) => a + b, 0);

        if (curr === total - curr) {
            return true;
        }
    }

    curr = 0;

    for (let j = 0; j < n - 1; j++) {

        for (let i = 0; i < m; i++) {
            curr += grid[i][j];
        }

        if (curr === total - curr) {
            return true;
        }
    }

    return false;
};