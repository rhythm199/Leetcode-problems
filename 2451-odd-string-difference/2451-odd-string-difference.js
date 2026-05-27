/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {

    function getPattern(word) {

        let arr = [];

        for (let i = 1; i < word.length; i++) {
            arr.push(
                word.charCodeAt(i) - word.charCodeAt(i - 1)
            );
        }

        return arr.join(",");
    }

    const map = new Map();

    for (let word of words) {

        let pattern = getPattern(word);

        if (!map.has(pattern)) {
            map.set(pattern, []);
        }

        map.get(pattern).push(word);
    }

    for (let arr of map.values()) {

        if (arr.length === 1) {
            return arr[0];
        }
    }
};