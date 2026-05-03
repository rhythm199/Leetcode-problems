/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    s = s.trim();

    let seenDigit = false;
    let seenDot = false;
    let seenE = false;

    for (let i = 0; i < s.length; i++) {
        let ch = s[i];

        if (ch >= '0' && ch <= '9') {
            seenDigit = true;
        }

        else if (ch === '+' || ch === '-') {
            if (i > 0 && s[i - 1] !== 'e' && s[i - 1] !== 'E') {
                return false;
            }
        }

        else if (ch === '.') {
            if (seenDot || seenE) return false;
            seenDot = true;
        }

        else if (ch === 'e' || ch === 'E') {
            if (seenE || !seenDigit) return false;
            seenE = true;
            seenDigit = false;
        }

        else {
            return false;
        }
    }

    return seenDigit;
};