/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const lastLower = new Array(26).fill(-1);
    const firstUpper = new Array(26).fill(Infinity);

    for (let i = 0; i < word.length; i++) {
        const ch = word[i];

        if (ch >= 'a' && ch <= 'z') {
            lastLower[ch.charCodeAt(0) - 97] = i;
        } else {
            const idx = ch.charCodeAt(0) - 65;
            firstUpper[idx] = Math.min(firstUpper[idx], i);
        }
    }

    let count = 0;

    for (let i = 0; i < 26; i++) {
        if (
            lastLower[i] !== -1 &&
            firstUpper[i] !== Infinity &&
            lastLower[i] < firstUpper[i]
        ) {
            count++;
        }
    }

    return count;
};