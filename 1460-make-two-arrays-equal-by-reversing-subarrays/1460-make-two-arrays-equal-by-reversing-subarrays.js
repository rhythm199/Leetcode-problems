/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const freq = new Map();

    for (const x of target) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    for (const x of arr) {
        if (!freq.has(x)) return false;

        freq.set(x, freq.get(x) - 1);

        if (freq.get(x) === 0) {
            freq.delete(x);
        }
    }

    return freq.size === 0;
};