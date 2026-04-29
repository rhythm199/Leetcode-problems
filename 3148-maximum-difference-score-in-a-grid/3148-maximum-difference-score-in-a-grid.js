/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
     let m = grid.length;
    let n = grid[0].length;

    let ans = -Infinity;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            let prevMin = Infinity;

            if (i > 0) prevMin = Math.min(prevMin, grid[i-1][j]);
            if (j > 0) prevMin = Math.min(prevMin, grid[i][j-1]);

            if (prevMin !== Infinity) {
                ans = Math.max(ans, grid[i][j] - prevMin);
            }
            grid[i][j] = Math.min(grid[i][j], prevMin);
        }
    }

    return ans;
};