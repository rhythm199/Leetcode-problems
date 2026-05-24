/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    const freq = new Map();

    for (const ch of s) {
        freq.set(ch, (freq.get(ch) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([ch, count]) => ch.repeat(count))
        .join('');
};