/**
 * @param {number[][]} tasks
 * @return {number}
 */
var findMinimumTime = function(tasks) {
    tasks.sort((first, second) => first[1] - second[1]);

    const timeline = new Array(2001).fill(0);

    let totalTime = 0;

    for (const [start, end, duration] of tasks) {
        let alreadyRunning = 0;

        for (let time = start; time <= end; time++) {
            alreadyRunning += timeline[time];
        }

        let remaining = duration - alreadyRunning;

        for (
            let time = end;
            time >= start && remaining > 0;
            time--
        ) {
            if (timeline[time] === 0) {
                timeline[time] = 1;
                totalTime++;
                remaining--;
            }
        }
    }

    return totalTime;
};