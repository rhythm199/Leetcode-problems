/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function(board) {
    const start = board.flat().join('');
    const target = "123450";

    const neighbors = {
        0: [1,3],
        1: [0,2,4],
        2: [1,5],
        3: [0,4],
        4: [1,3,5],
        5: [2,4]
    };

    const queue = [[start, 0]];
    const visited = new Set([start]);

    while (queue.length) {
        const [state, moves] = queue.shift();

        if (state === target) return moves;

        const zero = state.indexOf('0');

        for (const nextPos of neighbors[zero]) {
            const arr = state.split('');

            [arr[zero], arr[nextPos]] =
                [arr[nextPos], arr[zero]];

            const nextState = arr.join('');

            if (!visited.has(nextState)) {
                visited.add(nextState);
                queue.push([nextState, moves + 1]);
            }
        }
    }

    return -1;
};