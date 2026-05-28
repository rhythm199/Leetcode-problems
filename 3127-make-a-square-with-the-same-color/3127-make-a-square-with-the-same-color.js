/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
  for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            let black = 0;
            let white = 0;

            for (let x = i; x < i + 2; x++) {
                for (let y = j; y < j + 2; y++) {
                    if (grid[x][y] === 'B') black++;
                    else white++;
                }
            }

            if (black >= 3 || white >= 3) {
                return true;
            }
        }
    }

    return false;
  
};