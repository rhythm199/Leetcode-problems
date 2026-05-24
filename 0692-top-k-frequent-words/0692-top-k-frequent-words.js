/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const freq = new Map();

    for (const word of words) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }

    return [...freq.keys()]
        .sort((a, b) => {
            if (freq.get(b) !== freq.get(a)) {
                return freq.get(b) - freq.get(a);
            }
            return a.localeCompare(b);
        })
        .slice(0, k);
};