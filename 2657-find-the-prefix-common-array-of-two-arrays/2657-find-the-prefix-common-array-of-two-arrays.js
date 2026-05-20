/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
    const n = A.length;

    const seenA = new Set();
    const seenB = new Set();

    const result = new Array(n).fill(0);

    let common = 0;

    for (let i = 0; i < n; i++) {
        seenA.add(A[i]);
        seenB.add(B[i]);
        if (seenB.has(A[i])) {
            common++;
        }
        if (A[i] !== B[i] && seenA.has(B[i])) {
            common++;
        }

        result[i] = common;
    }

    return result;
};