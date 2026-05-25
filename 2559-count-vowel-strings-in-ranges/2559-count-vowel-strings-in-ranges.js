/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function(words, queries) {
    const n = words.length;
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        const word = words[i];

        if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
            prefix[i + 1] = prefix[i] + 1;
        } else {
            prefix[i + 1] = prefix[i];
        }
    }

    const ans = [];

    for (const [l, r] of queries) {
        ans.push(prefix[r + 1] - prefix[l]);
    }

    return ans;
};

function isVowel(ch) {
    return (
        ch === 'a' ||
        ch === 'e' ||
        ch === 'i' ||
        ch === 'o' ||
        ch === 'u'
    );
}