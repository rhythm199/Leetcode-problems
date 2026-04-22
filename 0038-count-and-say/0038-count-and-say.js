/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";
    let curr = "1";

    for (let i = 2; i <= n; i++) {
        let next = "";
        let count = 1;
        for (let j = 0; j < curr.length; j++) {
            if (curr[j] === curr[j + 1]) {
                count++;
            } else {
                next += count + curr[j];
                count = 1;
            }
        }
        curr = next;
    }
    return curr;
};