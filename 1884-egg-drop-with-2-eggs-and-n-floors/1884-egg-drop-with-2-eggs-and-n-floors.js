/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    let dp = Array.from({length: 3}, () => Array(n+1).fill(0));
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= 2; j++) {
            dp[j][i] = dp[j][i-1] + dp[j-1][i-1] + 1;
            
            if (dp[j][i] >= n) {
                return i;
            }
        }
    }
    
    return -1;
};