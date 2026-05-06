/**
 * @param {character[][]} boxGrid
 * @return {character[][]}
 */
var rotateTheBox = function(box) {
    let m = box.length;
    let n = box[0].length;
    
    for (let i = 0; i < m; i++) {
        let emptySlot = n - 1;
        for (let j = n - 1; j >= 0; j--) {
            if (box[i][j] === '#') {
                box[i][j] = '.';
                box[i][emptySlot] = '#';
                emptySlot--;
            } else if (box[i][j] === '*') {
                emptySlot = j - 1;
            }
        }
    }
    
    let result = Array.from({ length: n }, () => new Array(m));
    
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[j][m - 1 - i] = box[i][j];
        }
    }
    
    return result;
};