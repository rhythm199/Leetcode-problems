/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {

    function solve(str) {
        if (str.length < k) return 0;

        const freq = new Array(26).fill(0);

        for (const ch of str) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        for (let i = 0; i < str.length; i++) {
            if (freq[str.charCodeAt(i) - 97] < k) {

                let left = solve(str.slice(0, i));
                let right = solve(str.slice(i + 1));

                return Math.max(left, right);
            }
        }

        return str.length;
    }

    return solve(s);
};