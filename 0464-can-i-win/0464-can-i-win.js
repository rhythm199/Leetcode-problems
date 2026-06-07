/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {

    if (desiredTotal <= 0) return true;

    const total =
        (maxChoosableInteger *
            (maxChoosableInteger + 1)) / 2;

    if (total < desiredTotal) return false;

    const memo = new Map();

    function dfs(mask, remain) {

        if (memo.has(mask)) {
            return memo.get(mask);
        }

        for (let num = 1; num <= maxChoosableInteger; num++) {

            const bit = 1 << (num - 1);

            if (mask & bit) continue;

            if (
                num >= remain ||
                !dfs(mask | bit, remain - num)
            ) {
                memo.set(mask, true);
                return true;
            }
        }

        memo.set(mask, false);
        return false;
    }

    return dfs(0, desiredTotal);
};