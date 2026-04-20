/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
     const res = [];

    function dfs(open, close, str) {
        if (str.length === 2 * n) {
            res.push(str);
            return;
        }

        if (open < n) dfs(open + 1, close, str + "(");
        if (close < open) dfs(open, close + 1, str + ")");
    }

    dfs(0, 0, "");
    return res;
};