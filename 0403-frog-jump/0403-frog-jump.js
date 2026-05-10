/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
    const map = new Map();

    for (let stone of stones) {
        map.set(stone, new Set());
    }

    map.get(0).add(0);

    for (let stone of stones) {

        for (let jump of map.get(stone)) {

            for (let nextJump of [jump - 1, jump, jump + 1]) {

                if (
                    nextJump > 0 &&
                    map.has(stone + nextJump)
                ) {
                    map.get(stone + nextJump).add(nextJump);
                }
            }
        }
    }

    return map.get(stones[stones.length - 1]).size > 0;
};