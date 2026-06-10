/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {

    const employeeMap = new Map();

    for (const [name, time] of access_times) {

        if (!employeeMap.has(name)) {
            employeeMap.set(name, []);
        }

        const hour = Number(time.slice(0, 2));
        const minute = Number(time.slice(2));

        employeeMap.get(name).push(hour * 60 + minute);
    }

    const result = [];

    for (const [name, times] of employeeMap) {

        times.sort((a, b) => a - b);

        for (let i = 0; i + 2 < times.length; i++) {

            if (times[i + 2] - times[i] < 60) {
                result.push(name);
                break;
            }
        }
    }

    return result;
};