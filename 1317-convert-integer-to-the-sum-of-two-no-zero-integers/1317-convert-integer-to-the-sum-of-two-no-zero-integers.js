/**
 * @param {number} n
 * @return {number[]}
 */
/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {

    const hasZero = (num) => {
        while (num > 0) {
            if (num % 10 === 0) {
                return true;
            }

            num = Math.floor(num / 10);
        }

        return false;
    };

    for (let a = 1; a < n; a++) {
        let b = n - a;

        if (!hasZero(a) && !hasZero(b)) {
            return [a, b];
        }
    }

    return [];
};