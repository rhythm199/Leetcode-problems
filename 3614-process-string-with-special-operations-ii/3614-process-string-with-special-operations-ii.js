/**
 * @param {string} s
 * @param {number} k
 * @return {character}
 */
const processStr = (s, k) => {
    const n = s.length;
    let len = 0;

    for (const c of s) {
        if (c === '*')
            len = Math.max(len - 1, 0);
        else if (c === '#')
            len *= 2;
        else if (c !== '%')
            len++;
    }

    if (k >= len)
        return '.';

    for (let i = n - 1; ; i--) {
        const c = s[i];
        switch (c) {
            case '*':
                len++;
                break;
            case '#':
                if (k >= Math.floor(len / 2))
                    k -= Math.floor(len / 2);
                len = Math.floor(len / 2);
                break;
            case '%':
                k = len - 1 - k;
                break;
            default:
                if (len === k + 1)
                    return c;
                len--;
        }
    }
};