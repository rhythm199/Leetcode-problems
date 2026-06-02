/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 */
var escapeGhosts = function(ghosts, target) {
    const myDist =
        Math.abs(target[0]) +
        Math.abs(target[1]);

    for (const [x, y] of ghosts) {

        const ghostDist =
            Math.abs(x - target[0]) +
            Math.abs(y - target[1]);

        if (ghostDist <= myDist) {
            return false;
        }
    }

    return true;
};