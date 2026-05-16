/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    const memo = new Map();

    function dfs(start) {
        if (memo.has(start)) {
            return memo.get(start);
        }

        let result = [];

        // Reached end
        if (start === s.length) {
            result.push("");
        }

        for (let end = start + 1; end <= s.length; end++) {
            let word = s.substring(start, end);

            if (set.has(word)) {
                let sublist = dfs(end);

                for (let sub of sublist) {
                    result.push(
                        word + (sub === "" ? "" : " " + sub)
                    );
                }
            }
        }

        memo.set(start, result);
        return result;
    }

    return dfs(0);
};