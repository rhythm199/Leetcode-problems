/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const totalChildren = ratings.length;
    const candies = new Array(totalChildren).fill(1);

    for (let index = 1; index < totalChildren; index++) {
        if (ratings[index] > ratings[index - 1]) {
            candies[index] = candies[index - 1] + 1;
        }
    }

    for (let index = totalChildren - 2; index >= 0; index--) {
        if (
            ratings[index] > ratings[index + 1] &&
            candies[index] <= candies[index + 1]
        ) {
            candies[index] = candies[index + 1] + 1;
        }
    }

    return candies.reduce(
        (total, current) => total + current,
        0
    );
};