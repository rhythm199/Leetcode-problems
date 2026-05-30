/**
 * @param {number} n
 * @return {number}
 */
var minimumBoxes = function(n) {
    let total = 0;
    let floor = 0;
    let layer = 0;

    while (total + floor + layer + 1 <= n) {
        layer++;
        floor += layer;
        total += floor;
    }

    let extra = 0;

    while (total < n) {
        extra++;
        total += extra;
    }

    return floor + extra;
};