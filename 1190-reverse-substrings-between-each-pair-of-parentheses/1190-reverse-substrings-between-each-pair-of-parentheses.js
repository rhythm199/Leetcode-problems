/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const n = s.length;
    const pair = new Array(n);
    const stack = [];

    for (let i = 0; i < n; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else if (s[i] === ')') {
            const j = stack.pop();
            pair[i] = j;
            pair[j] = i;
        }
    }

    let res = [];
    let i = 0;
    let dir = 1;

    while (i < n) {
        if (s[i] === '(' || s[i] === ')') {
            i = pair[i];
            dir *= -1;
        } else {
            res.push(s[i]);
        }

        i += dir;
    }

    return res.join('');
};