/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {

    if (s.length !== goal.length) {
        return false;
    }

    if (s === goal) {

        const set = new Set();

        for (const ch of s) {

            if (set.has(ch)) {
                return true;
            }

            set.add(ch);
        }

        return false;
    }

    const diff = [];

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    if (diff.length !== 2) {
        return false;
    }

    const [i, j] = diff;

    return (
        s[i] === goal[j] &&
        s[j] === goal[i]
    );
};