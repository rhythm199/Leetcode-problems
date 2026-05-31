/**
 * @param {number[]} rungs
 * @param {number} dist
 * @return {number}
 */
var addRungs = function(rungs, dist) {
    let prev = 0;
    let added = 0;

    for (const rung of rungs) {
        const gap = rung - prev;

        added += Math.floor((gap - 1) / dist);

        prev = rung;
    }

    return added;
};