/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function(word) {
    let ans = 1;

    let i = 0;

    while (i < word.length) {
        let j = i;

        while (j < word.length && word[j] === word[i]) {
            j++;
        }

        ans += (j - i - 1);

        i = j;
    }

    return ans;
};