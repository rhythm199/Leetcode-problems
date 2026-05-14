/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function(mat, k) {

    let m = mat.length;
    let n = mat[0].length;

    k %= n;

    for (let i = 0; i < m; i++) {

        let shifted = Array(n);

        // even row -> left shift
        if (i % 2 === 0) {

            for (let j = 0; j < n; j++) {
                shifted[j] = mat[i][(j + k) % n];
            }

        } 
        // odd row -> right shift
        else {

            for (let j = 0; j < n; j++) {
                shifted[j] = mat[i][(j - k + n) % n];
            }
        }

        for (let j = 0; j < n; j++) {
            if (shifted[j] !== mat[i][j]) {
                return false;
            }
        }
    }

    return true;
};