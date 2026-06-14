/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @return {number}
 */
var maxBuilding = function(n, restrictions) {

    restrictions.push([1, 0]);

    if (!restrictions.some(([id]) => id === n)) {
        restrictions.push([n, n - 1]);
    }

    restrictions.sort((a, b) => a[0] - b[0]);

    for (let i = 1; i < restrictions.length; i++) {
        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i - 1][1] +
            restrictions[i][0] - restrictions[i - 1][0]
        );
    }

    for (let i = restrictions.length - 2; i >= 0; i--) {
        restrictions[i][1] = Math.min(
            restrictions[i][1],
            restrictions[i + 1][1] +
            restrictions[i + 1][0] - restrictions[i][0]
        );
    }

    let ans = 0;

    for (let i = 1; i < restrictions.length; i++) {

        const [x1, h1] = restrictions[i - 1];
        const [x2, h2] = restrictions[i];

        const dist = x2 - x1;

        ans = Math.max(
            ans,
            Math.floor((h1 + h2 + dist) / 2)
        );
    }

    return ans;
};