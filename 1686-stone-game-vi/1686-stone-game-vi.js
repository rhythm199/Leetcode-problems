/**
 * @param {number[]} aliceValues
 * @param {number[]} bobValues
 * @return {number}
 */
var stoneGameVI = function(aliceValues, bobValues) {
    const stones = [];

    for (let i = 0; i < aliceValues.length; i++) {
        stones.push([
            aliceValues[i] + bobValues[i],
            aliceValues[i],
            bobValues[i]
        ]);
    }

    stones.sort((a, b) => b[0] - a[0]);

    let alice = 0;
    let bob = 0;

    for (let i = 0; i < stones.length; i++) {
        if (i % 2 === 0) {
            alice += stones[i][1];
        } else {
            bob += stones[i][2];
        }
    }

    if (alice > bob) return 1;
    if (bob > alice) return -1;

    return 0;
};