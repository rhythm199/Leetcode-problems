/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const set = new Set(s);

    for (let i = 25; i >= 0; i--) {
        const upper = String.fromCharCode(65 + i);
        const lower = String.fromCharCode(97 + i);

        if (set.has(upper) && set.has(lower)) {
            return upper;
        }
    }

    return "";
};