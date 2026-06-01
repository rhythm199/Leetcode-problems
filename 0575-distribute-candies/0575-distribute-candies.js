/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const uniqueTypes = new Set(candyType).size;

    return Math.min(
        uniqueTypes,
        candyType.length / 2
    );
};