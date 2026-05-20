/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {

    amount.sort((a, b) => a - b);

    const total = amount[0] + amount[1] + amount[2];

    return Math.max(
        amount[2],
        Math.ceil(total / 2)
    );
};