/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
     arr.sort((a, b) => a - b);

    let minDiff = Infinity;
    const result = [];

    for (let index = 1; index < arr.length; index++) {
        minDiff = Math.min(minDiff, arr[index] - arr[index - 1]);
    }

    for (let index = 1; index < arr.length; index++) {
        if (arr[index] - arr[index - 1] === minDiff) {
            result.push([arr[index - 1], arr[index]]);
        }
    }

    return result;
};