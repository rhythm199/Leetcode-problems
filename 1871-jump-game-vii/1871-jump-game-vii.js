/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    const n = s.length;

    const dp = Array(n).fill(false);
    dp[0] = true;

    let reachable = 0;

    for (let i = 1; i < n; i++) {

        if (i >= minJump && dp[i - minJump]) {
            reachable++;
        }

        if (i > maxJump && dp[i - maxJump - 1]) {
            reachable--;
        }

        dp[i] = reachable > 0 && s[i] === '0';
    }

    return dp[n - 1];
};