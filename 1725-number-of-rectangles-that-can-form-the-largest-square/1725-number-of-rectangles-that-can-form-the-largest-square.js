/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
     let maxLen = 0;
    let count = 0;

    for (let [l, w] of rectangles) {

        let side = Math.min(l, w);

        if (side > maxLen) {
            maxLen = side;
            count = 1;

        } else if (side === maxLen) {
            count++;
        }
    }

    return count;
};