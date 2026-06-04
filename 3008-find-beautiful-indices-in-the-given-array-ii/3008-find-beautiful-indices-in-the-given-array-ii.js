/**
 * @param {string} s
 * @param {string} a
 * @param {string} b
 * @param {number} k
 * @return {number[]}
 */
var beautifulIndices = function(s, a, b, k) {
    const kmpSearch = (text, pattern) => {
        const lps = new Array(pattern.length).fill(0);

        for (let idx = 1, len = 0; idx < pattern.length;) {
            if (pattern[idx] === pattern[len]) {
                lps[idx++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                idx++;
            }
        }

        const matches = [];

        for (let textIdx = 0, patIdx = 0; textIdx < text.length;) {
            if (text[textIdx] === pattern[patIdx]) {
                textIdx++;
                patIdx++;
            }

            if (patIdx === pattern.length) {
                matches.push(textIdx - patIdx);
                patIdx = lps[patIdx - 1];
            } else if (
                textIdx < text.length &&
                text[textIdx] !== pattern[patIdx]
            ) {
                if (patIdx > 0) {
                    patIdx = lps[patIdx - 1];
                } else {
                    textIdx++;
                }
            }
        }

        return matches;
    };

    const positionsA = kmpSearch(s, a);
    const positionsB = kmpSearch(s, b);

    const answer = [];

    let pointer = 0;

    for (const indexA of positionsA) {
        while (
            pointer < positionsB.length &&
            positionsB[pointer] < indexA - k
        ) {
            pointer++;
        }

        if (
            pointer < positionsB.length &&
            Math.abs(positionsB[pointer] - indexA) <= k
        ) {
            answer.push(indexA);
        }
    }

    return answer;
};