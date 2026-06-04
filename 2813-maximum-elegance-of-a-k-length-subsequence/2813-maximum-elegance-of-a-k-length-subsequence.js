/**
 * @param {number[][]} items
 * @param {number} k
 * @return {number}
 */
var findMaximumElegance = function(items, k) {
    items.sort((first, second) => second[0] - first[0]);

    let totalProfit = 0;
    let maxElegance = 0;

    const usedCategories = new Set();
    const duplicateProfits = [];

    for (let idx = 0; idx < items.length; idx++) {
        const [profit, category] = items[idx];

        if (idx < k) {
            totalProfit += profit;

            if (usedCategories.has(category)) {
                duplicateProfits.push(profit);
            } else {
                usedCategories.add(category);
            }
        } else {
            if (
                duplicateProfits.length > 0 &&
                !usedCategories.has(category)
            ) {
                totalProfit -= duplicateProfits.pop();
                totalProfit += profit;
                usedCategories.add(category);
            }
        }

        const distinctCount = usedCategories.size;
        maxElegance = Math.max(
            maxElegance,
            totalProfit + distinctCount * distinctCount
        );
    }

    return maxElegance;
};