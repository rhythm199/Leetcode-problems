/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function(wordlist, queries) {
    const exact = new Set(wordlist);

    const lowerMap = new Map();
    const vowelMap = new Map();

    const devowel = (word) =>
        word
            .toLowerCase()
            .replace(/[aeiou]/g, '*');

    for (const word of wordlist) {
        const lower = word.toLowerCase();

        if (!lowerMap.has(lower)) {
            lowerMap.set(lower, word);
        }

        const mask = devowel(word);

        if (!vowelMap.has(mask)) {
            vowelMap.set(mask, word);
        }
    }

    const ans = [];

    for (const q of queries) {
        if (exact.has(q)) {
            ans.push(q);
            continue;
        }

        const lower = q.toLowerCase();

        if (lowerMap.has(lower)) {
            ans.push(lowerMap.get(lower));
            continue;
        }

        const mask = devowel(q);

        if (vowelMap.has(mask)) {
            ans.push(vowelMap.get(mask));
            continue;
        }

        ans.push("");
    }

    return ans;
};