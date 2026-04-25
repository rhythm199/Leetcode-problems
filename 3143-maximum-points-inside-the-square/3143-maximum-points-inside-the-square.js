/**
 * @param {number[][]} points
 * @param {string} s
 * @return {number}
 */
var maxPointsInsideSquare = function(points, s) {
     const INF = 1e18;

    // min distance for each character
    let minDist = Array(26).fill(INF);
    let secondMin = INF;

    for (let i = 0; i < points.length; i++) {
        let [x, y] = points[i];
        let d = Math.max(Math.abs(x), Math.abs(y));
        let idx = s.charCodeAt(i) - 97;

        if (minDist[idx] === INF) {
            minDist[idx] = d;
        } else if (d < minDist[idx]) {
            secondMin = Math.min(secondMin, minDist[idx]);
            minDist[idx] = d;
        } else {
            secondMin = Math.min(secondMin, d);
        }
    }

    // count how many valid points we can include
    let count = 0;
    for (let d of minDist) {
        if (d < secondMin) count++;
    }

    return count;
};