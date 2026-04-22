/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
     if (!s || !words.length) return [];

    let wordLen = words[0].length;
    let totalLen = wordLen * words.length;
    let map = new Map();

    for (let w of words) {
        map.set(w, (map.get(w) || 0) + 1);
    }

    let res = [];

    for (let i = 0; i <= s.length - totalLen; i++) {
        let seen = new Map();
        let j = 0;
        while (j < words.length) {
            let word = s.substring(i + j * wordLen, i + (j + 1) * wordLen);
            if (!map.has(word)) break;
            seen.set(word, (seen.get(word) || 0) + 1);
            if (seen.get(word) > map.get(word)) break;
            j++;
        }
        if (j === words.length) res.push(i);
    }
    return res;
};