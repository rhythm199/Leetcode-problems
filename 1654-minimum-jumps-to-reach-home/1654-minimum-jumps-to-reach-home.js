/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
    const forbiddenSet = new Set(forbidden);
    const visited = new Set();

    const queue = [[0, 1, 0]]; 

    const LIMIT = 6000;

    while (queue.length) {
        const [pos, canBack, steps] = queue.shift();

        if (pos === x) return steps;

        let forward = pos + a;
        if (
            forward < LIMIT &&
            !forbiddenSet.has(forward) &&
            !visited.has(`${forward},1`)
        ) {
            visited.add(`${forward},1`);
            queue.push([forward, 1, steps + 1]);
        }
        let backward = pos - b;
        if (
            canBack &&
            backward >= 0 &&
            !forbiddenSet.has(backward) &&
            !visited.has(`${backward},0`)
        ) {
            visited.add(`${backward},0`);
            queue.push([backward, 0, steps + 1]);
        }
    }

    return -1;
};