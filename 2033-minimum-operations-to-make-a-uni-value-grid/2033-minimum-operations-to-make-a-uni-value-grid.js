/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
     let arr = [];
    for (let row of grid) {
        for (let val of row) {
            arr.push(val);
        }
    }

    let mod = arr[0] % x;
    for (let val of arr) {
        if (val % x !== mod) return -1;
    }
    arr.sort((a, b) => a - b);
    let median = arr[Math.floor(arr.length / 2)];
    let ops = 0;
    for (let val of arr) {
        ops += Math.abs(val - median) / x;
    }

    return ops;
};