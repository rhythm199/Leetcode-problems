/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */

var camelMatch = function(queries, pattern) {

    function matches(query) {
        let j = 0;

        for (let i = 0; i < query.length; i++) {

            if (
                j < pattern.length &&
                query[i] === pattern[j]
            ) {
                j++;
            }
            else if (
                query[i] >= 'A' &&
                query[i] <= 'Z'
            ) {
                return false;
            }
        }

        return j === pattern.length;
    }

    return queries.map(matches);
};