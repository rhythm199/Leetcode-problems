/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
     let count = [0, 0];

    for (let s of students) count[s]++;

    for (let s of sandwiches) {
        if (count[s] === 0) {
            return count[s ^ 1];
        }
        count[s]--;
    }

    return 0;
};