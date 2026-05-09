/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
     const m = mat.length;
    const n = mat[0].length;

    if (m * n !== r * c) {
        return mat;
    }

    const res = Array.from({ length: r }, () => Array(c));

    for (let i = 0; i < m * n; i++) {
        res[Math.floor(i / c)][i % c] =
            mat[Math.floor(i / n)][i % n];
    }

    return res;
};