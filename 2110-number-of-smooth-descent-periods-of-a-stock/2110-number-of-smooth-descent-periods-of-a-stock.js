/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let count = 1;
    let ans = 1;

    for (let i = 1; i < prices.length; i++) {

        if (prices[i - 1] - prices[i] === 1) {
            count++;
        } else {
            count = 1;
        }

        ans += count;
    }

    return ans;
};