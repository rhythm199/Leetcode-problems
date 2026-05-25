/**
 * @param {number[]} a
 * @param {number} k
 * @return {number}
 */
var minOperations = function(a, k) {
     a.sort((x, y) => x - y);
    for(let i = 0, j = 0, count = 0, x, y; ; ++count) {
        if (i < a.length && (j >= count || a[i] <= a[j])) x = a[i++];
        else x = a[j++];
        if (x >= k) return count;
        if (i < a.length && (j >= count || a[i] <= a[j])) y = a[i++];
        else y = a[j++];
        a[count] = x * 2 + y;
    }
    return -1;
};
