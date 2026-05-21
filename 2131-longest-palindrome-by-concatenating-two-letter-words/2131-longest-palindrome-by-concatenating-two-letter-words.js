/**
 * @param {string[]} words
 * @return {number}
 */
var longestPalindrome = function(words) {

    const map = new Map();

    let length = 0;

    for (const word of words) {

        const rev =
            word[1] + word[0];

        if ((map.get(rev) || 0) > 0) {

            length += 4;

            map.set(
                rev,
                map.get(rev) - 1
            );

        } else {

            map.set(
                word,
                (map.get(word) || 0) + 1
            );
        }
    }
    for (const [word, count] of map) {

        if (
            word[0] === word[1] &&
            count > 0
        ) {
            length += 2;
            break;
        }
    }

    return length;
};