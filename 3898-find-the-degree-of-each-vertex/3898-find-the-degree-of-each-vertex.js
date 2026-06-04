/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {

    r = [];

    for (let c of matrix) {
        r.push(c.reduce((a, b) => a+b, 0))
    }

    return r
};