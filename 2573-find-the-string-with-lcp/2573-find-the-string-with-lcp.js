/**
 * @param {number[][]} lcp
 * @return {string}
 */
var findTheString = function(lcp) {
    let n = lcp.length;

    let res = Array(n).fill("");

    let ch = 0;
    for (let i = 0; i < n; i++) {

        if (res[i] !== "") continue;

        if (ch >= 26) return "";

        let curr = String.fromCharCode(97 + ch);

        for (let j = i; j < n; j++) {
            if (lcp[i][j] > 0) {
                res[j] = curr;
            }
        }

        ch++;
    }

    let s = res.join("");

    // Validate LCP matrix
    for (let i = n - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {

            let expected;

            if (s[i] !== s[j]) {
                expected = 0;
            } else if (i === n - 1 || j === n - 1) {
                expected = 1;
            } else {
                expected = lcp[i + 1][j + 1] + 1;
            }

            if (lcp[i][j] !== expected) {
                return "";
            }
        }
    }

    return s;
};