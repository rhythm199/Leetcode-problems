/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var cherryPickup = function(grid) {

    const n = grid.length;
    const memo = new Map();

    function dfs(r1, c1, r2) {

        const c2 = r1 + c1 - r2;

        if (
            r1 >= n || c1 >= n ||
            r2 >= n || c2 >= n ||
            grid[r1][c1] === -1 ||
            grid[r2][c2] === -1
        ) {
            return -Infinity;
        }

        if (
            r1 === n - 1 &&
            c1 === n - 1
        ) {
            return grid[r1][c1];
        }

        const key =
            `${r1},${c1},${r2}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let cherries = grid[r1][c1];

        if (r1 !== r2 || c1 !== c2) {
            cherries += grid[r2][c2];
        }

        let best = Math.max(
            dfs(r1 + 1, c1, r2 + 1),
            dfs(r1 + 1, c1, r2),
            dfs(r1, c1 + 1, r2 + 1),
            dfs(r1, c1 + 1, r2)
        );

        cherries += best;

        memo.set(key, cherries);

        return cherries;
    }

    return Math.max(0, dfs(0, 0, 0));
};