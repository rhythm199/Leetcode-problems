/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {

    const map = new Map();

    for (let task of tasks) {
        map.set(
            task,
            (map.get(task) || 0) + 1
        );
    }

    let rounds = 0;

    for (let freq of map.values()) {

        if (freq === 1) {
            return -1;
        }

        rounds += Math.ceil(freq / 3);
    }

    return rounds;
};