/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
     let maxWords = 0;

    for (const sentence of sentences) {
        const wordCount = sentence.split(' ').length;
        maxWords = Math.max(maxWords, wordCount);
    }

    return maxWords;
};