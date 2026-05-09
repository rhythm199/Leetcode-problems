/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }

    const res = Array.from({ length: m }, () => Array(n));

    for (let i = 0; i < original.length; i++) {
        res[Math.floor(i / n)][i % n] = original[i];
    }

    return res;
};