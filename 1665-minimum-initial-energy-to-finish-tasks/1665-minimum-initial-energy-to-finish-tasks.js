/**
 * @param {number[][]} tasks
 * @return {number}
 */
var minimumEffort = function(tasks) {
    tasks.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));

    let energy = 0;
    let current = 0;

    for (const [actual, minimum] of tasks) {
        if (current < minimum) {
            energy += minimum - current;
            current = minimum;
        }

        current -= actual;
    }

    return energy;
};