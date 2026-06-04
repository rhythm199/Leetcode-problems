/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxScore = function(grid) {
    const rowCount = grid.length;

    const valueToRows = new Map();

    for (let row = 0; row < rowCount; row++) {
        for (const value of grid[row]) {
            if (!valueToRows.has(value)) {
                valueToRows.set(value, []);
            }

            valueToRows.get(value).push(row);
        }
    }

    const values = [...valueToRows.keys()].sort((a, b) => b - a);

    const memo = new Map();

    const dfs = (index, mask) => {
        if (index === values.length) {
            return 0;
        }

        const key = `${index}-${mask}`;

        if (memo.has(key)) {
            return memo.get(key);
        }

        let bestScore = dfs(index + 1, mask);

        const currentValue = values[index];

        for (const row of valueToRows.get(currentValue)) {
            if ((mask & (1 << row)) === 0) {
                bestScore = Math.max(
                    bestScore,
                    currentValue +
                        dfs(index + 1, mask | (1 << row))
                );
            }
        }

        memo.set(key, bestScore);

        return bestScore;
    };

    return dfs(0, 0);
};