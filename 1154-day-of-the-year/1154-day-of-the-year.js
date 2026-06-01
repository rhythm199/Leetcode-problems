/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(Number);

    const daysInMonth = [
        31, 28, 31, 30, 31, 30,
        31, 31, 30, 31, 30, 31
    ];

    const isLeapYear =
        (year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0);

    if (isLeapYear) {
        daysInMonth[1] = 29;
    }

    let totalDays = day;

    for (let monthIndex = 0; monthIndex < month - 1; monthIndex++) {
        totalDays += daysInMonth[monthIndex];
    }

    return totalDays;
};