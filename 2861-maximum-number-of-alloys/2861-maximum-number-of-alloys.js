/**
 * @param {number} n
 * @param {number} k
 * @param {number} budget
 * @param {number[][]} composition
 * @param {number[]} stock
 * @param {number[]} cost
 * @return {number}
 */
var maxNumberOfAlloys = function(n, k, budget, composition, stock, cost) {

    const canMake = (machine, target) => {

        let total = 0;

        for (let i = 0; i < n; i++) {

            let needed = machine[i] * target;

            if (needed > stock[i]) {
                total += (needed - stock[i]) * cost[i];
            }

            if (total > budget) {
                return false;
            }
        }

        return true;
    };

    let ans = 0;

    for (let machine of composition) {

        let left = 0;
        let right = 1e9;

        while (left <= right) {

            let mid = Math.floor((left + right) / 2);

            if (canMake(machine, mid)) {
                ans = Math.max(ans, mid);
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return ans;
};