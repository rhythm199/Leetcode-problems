/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumOperations = function(grid) {
    const rows = grid.length, cols = grid[0].length;
    const costs = Array.from({ length: cols }, () => new Array(10).fill(0));

    for (let j = 0; j < cols; j++) {
        const counts = new Array(10).fill(0);
        for (let i = 0; i < rows; i++) counts[grid[i][j]]++;
        for (let v = 0; v < 10; v++) costs[j][v] = rows - counts[v];
    }

    let dp = new Array(10).fill(0);
    for (let v = 0; v < 10; v++) dp[v] = costs[0][v];

    for (let j = 1; j < cols; j++) {
        const nextDp = new Array(10).fill(Infinity);
        for (let v = 0; v < 10; v++) {
            for (let prevV = 0; prevV < 10; prevV++) {
                if (v !== prevV) {
                    nextDp[v] = Math.min(nextDp[v], dp[prevV] + costs[j][v]);
                }
            }
        }
        dp = nextDp;
    }
    return Math.min(...dp);
};