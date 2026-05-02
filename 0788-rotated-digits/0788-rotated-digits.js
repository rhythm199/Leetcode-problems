/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    let count = 0;

        for (let i = 1; i <= n; i++) {
                if (isGood(i)) count++;
                    }

                        return count;
                        };

                        function isGood(num) {
                            let changed = false;

                                while (num > 0) {
                                        let digit = num % 10;

                                                // invalid digits
                                                        if (digit === 3 || digit === 4 || digit === 7) {
                                                                    return false;
                                                                            }

                                                                                    // digits that change
                                                                                            if (digit === 2 || digit === 5 || digit === 6 || digit === 9) {
                                                                                                        changed = true;
                                                                                                                }

                                                                                                                        num = Math.floor(num / 10);
                                                                                                                            }

                                                                                                                                return changed;
};