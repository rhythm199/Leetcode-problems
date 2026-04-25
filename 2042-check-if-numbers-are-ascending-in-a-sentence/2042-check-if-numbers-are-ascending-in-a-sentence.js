/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const tokens = s.split(' ');
    let prev = -1;

    for (const token of tokens) {
        if (token[0] >= '0' && token[0] <= '9') {
            const current = parseInt(token);
            if (current <= prev) {
                return false;
            }
            prev = current;
        }
    }

    return true;
};