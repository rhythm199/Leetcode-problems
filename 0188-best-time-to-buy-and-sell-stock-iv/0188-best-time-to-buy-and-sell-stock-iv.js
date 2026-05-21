/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {

    const n = prices.length;

    // unlimited transactions case
    if (k >= Math.floor(n / 2)) {

        let profit = 0;

        for (let i = 1; i < n; i++) {

            if (prices[i] > prices[i - 1]) {
                profit += prices[i] - prices[i - 1];
            }
        }

        return profit;
    }

    const buy = Array(k + 1).fill(-Infinity);
    const sell = Array(k + 1).fill(0);

    for (const price of prices) {

        for (let i = 1; i <= k; i++) {

            buy[i] = Math.max(
                buy[i],
                sell[i - 1] - price
            );

            sell[i] = Math.max(
                sell[i],
                buy[i] + price
            );
        }
    }

    return sell[k];
};