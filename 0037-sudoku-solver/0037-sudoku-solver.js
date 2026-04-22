/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (r, c, char) => {
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === char) return false;
            if (board[r][i] === char) return false;
            if (board[3 * Math.floor(r / 3) + Math.floor(i / 3)][3 * Math.floor(c / 3) + (i % 3)] === char) return false;
        }
        return true;
    };

    const solve = () => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") {
                    for (let char = 1; char <= 9; char++) {
                        let s = char.toString();
                        if (isValid(r, c, s)) {
                            board[r][c] = s;
                            if (solve()) return true;
                            board[r][c] = ".";
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();

};