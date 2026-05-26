/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    return title
        .split(" ")
        .map(word => {
            word = word.toLowerCase();

            if (word.length <= 2) {
                return word;
            }

            return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
};