/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var constructProductMatrix = function(grid) {
    const MOD = 12345;

    let m = grid.length;
    let n = grid[0].length;

    const arr = [];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(grid[i][j] % MOD);
        }
    }

    let size = arr.length;

    const prefix = Array(size).fill(1);
    const suffix = Array(size).fill(1);

    for (let i = 1; i < size; i++) {
        prefix[i] = (prefix[i - 1] * arr[i - 1]) % MOD;
    }
    for (let i = size - 2; i >= 0; i--) {
        suffix[i] = (suffix[i + 1] * arr[i + 1]) % MOD;
    }

    const result = Array.from({ length: m }, () => Array(n).fill(0));

    let idx = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[i][j] = (prefix[idx] * suffix[idx]) % MOD;
            idx++;
        }
    }

    return result;
};