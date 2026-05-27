/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numberOfSubstrings = function(s, k) {
     const freq = new Array(26).fill(0);

    let left = 0;
    let ans = 0;
    let n = s.length;

    for (let right = 0; right < n; right++) {

        freq[s.charCodeAt(right) - 97]++;

        while (Math.max(...freq) >= k) {

            ans += (n - right);

            freq[s.charCodeAt(left) - 97]--;
            left++;
        }
    }

    return ans;
};