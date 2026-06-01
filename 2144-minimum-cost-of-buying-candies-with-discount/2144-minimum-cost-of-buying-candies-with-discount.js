/**
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(cost) {
     cost.sort((a, b) => b - a);

    let totalCost = 0;

    for (let index = 0; index < cost.length; index++) {
        if ((index + 1) % 3 !== 0) {
            totalCost += cost[index];
        }
    }

    return totalCost;
};