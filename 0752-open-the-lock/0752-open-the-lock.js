/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    if (dead.has("0000")) return -1;

    const queue = [["0000", 0]];
    const visited = new Set(["0000"]);

    function getNext(state) {
        const res = [];

        for (let i = 0; i < 4; i++) {
            let digit = Number(state[i]);

            for (let move of [-1, 1]) {
                let newDigit = (digit + move + 10) % 10;
                let next =
                    state.slice(0, i) +
                    newDigit +
                    state.slice(i + 1);

                res.push(next);
            }
        }

        return res;
    }

    while (queue.length) {
        const [curr, steps] = queue.shift();

        if (curr === target) return steps;

        for (let next of getNext(curr)) {
            if (!dead.has(next) && !visited.has(next)) {
                visited.add(next);
                queue.push([next, steps + 1]);
            }
        }
    }

    return -1;
};