/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const res = [];
    const n = s.length;

    const isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) return false;
            l++;
            r--;
        }
        return true;
    };

    const backtrack = (idx, path) => {
        if (idx === n) {
            res.push([...path]);
            return;
        }

        for (let i = idx; i < n; i++) {
            if (isPalindrome(idx, i)) {
                path.push(s.substring(idx, i + 1));
                backtrack(i + 1, path);
                path.pop();
            }
        }
    };

    backtrack(0, []);
    return res;
};