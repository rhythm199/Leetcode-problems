/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
     const diff = new Array(n).fill(0);

    for (const [first, last, seats] of bookings) {
        diff[first - 1] += seats;

        if (last < n) {
            diff[last] -= seats;
        }
    }

    for (let i = 1; i < n; i++) {
        diff[i] += diff[i - 1];
    }

    return diff;
};