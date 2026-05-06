/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function(buildings) {
    const points = [];
    for (let [l, r, h] of buildings) {
        points.push([l, -h]);
        points.push([r, h]);
    }

    points.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    const result = [];
    const heights = [0]; 
    let prevMax = 0;

    for (let [x, h] of points) {
        if (h < 0) {
            heights.push(-h);
            heights.sort((a, b) => b - a); 
        } else {
            const index = heights.indexOf(h);
            heights.splice(index, 1);
        }

        let currMax = heights[0];
        if (currMax !== prevMax) {
            result.push([x, currMax]);
            prevMax = currMax;
        }
    }

    return result;
};