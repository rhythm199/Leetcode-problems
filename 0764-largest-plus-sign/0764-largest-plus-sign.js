/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
    const grid = Array.from(
        { length: n },
        () => Array(n).fill(n)
    );

    for (const [row, col] of mines) {
        grid[row][col] = 0;
    }

    for (let row = 0; row < n; row++) {
        let count = 0;

        for (let col = 0; col < n; col++) {
            count = grid[row][col] === 0 ? 0 : count + 1;
            grid[row][col] = Math.min(grid[row][col], count);
        }

        count = 0;

        for (let col = n - 1; col >= 0; col--) {
            count = grid[row][col] === 0 ? 0 : count + 1;
            grid[row][col] = Math.min(grid[row][col], count);
        }
    }

    let answer = 0;

    for (let col = 0; col < n; col++) {
        let count = 0;

        for (let row = 0; row < n; row++) {
            count = grid[row][col] === 0 ? 0 : count + 1;
            grid[row][col] = Math.min(grid[row][col], count);
        }

        count = 0;

        for (let row = n - 1; row >= 0; row--) {
            count = grid[row][col] === 0 ? 0 : count + 1;
            grid[row][col] = Math.min(grid[row][col], count);

            answer = Math.max(answer, grid[row][col]);
        }
    }

    return answer;
};