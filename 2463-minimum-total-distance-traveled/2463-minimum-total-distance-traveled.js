/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {
    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);
    const factorySlots = [];
    for (const [pos, cap] of factory) {
        for (let i = 0; i < cap; i++) {
            factorySlots.push(pos);
        }
    }
    const n = robot.length;
    const m = factorySlots.length;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));

    for (let j = 0; j <= m; j++) {
        dp[0][j] = 0;
    }
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            let skip = dp[i][j - 1];
            let match = dp[i - 1][j - 1] + Math.abs(robot[i - 1] - factorySlots[j - 1]);
            
            dp[i][j] = Math.min(skip, match);
        }
    }

    return dp[n][m];
};