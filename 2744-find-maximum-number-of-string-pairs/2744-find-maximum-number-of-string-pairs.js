/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    let set = new Set();

    let count = 0;

    for (let word of words) {

        let reversed =
            word[1] + word[0];

        if (set.has(reversed)) {
            count++;
        }

        set.add(word);
    }

    return count;
};