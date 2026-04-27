/**
 * @param {character[][]} grid
 * @return {boolean}
 */
/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var hasValidPath = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    if ((m + n - 1) % 2 !== 0) return false;
    if (grid[0][0] === ')' || grid[m-1][n-1] === '(') return false;
    const memo = new Array(m).fill(0).map(() => 
        new Array(n).fill(0).map(() => new Set())
    );

    const dfs = (r, c, bal) => {
        const currentBal = bal + (grid[r][c] === '(' ? 1 : -1);
        if (currentBal < 0 || currentBal > (m - 1 - r + n - 1 - c)) return false;
        if (r === m - 1 && c === n - 1) {
            return currentBal === 0;
        }

        if (memo[r][c].has(currentBal)) return false;
        if (c + 1 < n && dfs(r, c + 1, currentBal)) return true;
        if (r + 1 < m && dfs(r + 1, c, currentBal)) return true;
        memo[r][c].add(currentBal);
        return false;
    };

    return dfs(0, 0, 0);
};