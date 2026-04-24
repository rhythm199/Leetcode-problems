/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let n = moves.length;
    let x = 0;
    let y=0;
    for(let move of moves) {
        if(move==='L') x--;
        else if(move === 'R') x++;
        else
        y++;
    }
    return Math.abs(x)+y;
};