/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxTotalValue = function(A, k) {
    let min = A[0], max = A[0];

    for (const n of A) {
        min = Math.min(min, n);
        max = Math.max(max, n);
    }

    return (max - min) * k;
};