/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

    if (numerator === 0) return "0";

    let result = "";

    // sign
    if (
        (numerator < 0) ^ (denominator < 0)
    ) {
        result += "-";
    }

    let num = Math.abs(numerator);
    let den = Math.abs(denominator);

    // integer part
    result += Math.floor(num / den);

    let remainder = num % den;

    if (remainder === 0) return result;

    result += ".";

    const map = new Map();

    while (remainder !== 0) {

        if (map.has(remainder)) {

            const idx = map.get(remainder);

            return (
                result.slice(0, idx) +
                "(" +
                result.slice(idx) +
                ")"
            );
        }

        map.set(remainder, result.length);

        remainder *= 10;

        result += Math.floor(remainder / den);

        remainder %= den;
    }

    return result;
};