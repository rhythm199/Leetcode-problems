/**
 * @param {number[][]} board
 * @return {void}
 */
var gameOfLife = function(board) {
    const rows = board.length;
    const cols = board[0].length;

    const dirs = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],           [0, 1],
        [1, -1],  [1, 0],  [1, 1]
    ];

    function countLive(r, c) {
        let live = 0;

        for (const [dr, dc] of dirs) {
            const nr = r + dr;
            const nc = c + dc;

            if (
                nr >= 0 &&
                nr < rows &&
                nc >= 0 &&
                nc < cols &&
                Math.abs(board[nr][nc]) === 1
            ) {
                live++;
            }
        }

        return live;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {

            const live = countLive(r, c);

            if (board[r][c] === 1) {
                if (live < 2 || live > 3) {
                    board[r][c] = -1;
                }
            } else {
                if (live === 3) {
                    board[r][c] = 2;
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] > 0) {
                board[r][c] = 1;
            } else {
                board[r][c] = 0;
            }
        }
    }
};