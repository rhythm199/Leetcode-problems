/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    const MOD = 1000000007;

    const frequency = new Array(26).fill(0);

    for (const character of s) {
        frequency[character.charCodeAt(0) - 97]++;
    }

    for (let step = 0; step < t; step++) {
        const nextFrequency = new Array(26).fill(0);

        for (let letter = 0; letter < 25; letter++) {
            nextFrequency[letter + 1] =
                (nextFrequency[letter + 1] +
                    frequency[letter]) %
                MOD;
        }

        nextFrequency[0] =
            (nextFrequency[0] + frequency[25]) % MOD;

        nextFrequency[1] =
            (nextFrequency[1] + frequency[25]) % MOD;

        for (let letter = 0; letter < 26; letter++) {
            frequency[letter] = nextFrequency[letter];
        }
    }

    let totalLength = 0;

    for (const count of frequency) {
        totalLength = (totalLength + count) % MOD;
    }

    return totalLength;
};