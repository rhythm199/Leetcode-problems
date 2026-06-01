/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var satisfiesConditions = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {

            if (
                row + 1 < rows &&
                grid[row][col] !== grid[row + 1][col]
            ) {
                return false;
            }

            if (
                col + 1 < cols &&
                grid[row][col] === grid[row][col + 1]
            ) {
                return false;
            }
        }
    }

    return true;
};