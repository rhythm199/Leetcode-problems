/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function(n, requests) {

    let ans = 0;

    function backtrack(idx, count, balance) {

        if (idx === requests.length) {

            for (let x of balance) {
                if (x !== 0) return;
            }

            ans = Math.max(ans, count);

            return;
        }

        // take
        let [from, to] = requests[idx];

        balance[from]--;
        balance[to]++;

        backtrack(idx + 1, count + 1, balance);

        balance[from]++;
        balance[to]--;

        // skip
        backtrack(idx + 1, count, balance);
    }

    backtrack(
        0,
        0,
        new Array(n).fill(0)
    );

    return ans;
};