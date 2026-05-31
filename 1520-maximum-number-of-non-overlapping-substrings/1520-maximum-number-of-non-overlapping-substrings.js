/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const first = Array(26).fill(n);
    const last = Array(26).fill(-1);

    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - 97;
        first[idx] = Math.min(first[idx], i);
        last[idx] = i;
    }

    const ranges = [];

    for (let i = 0; i < n; i++) {
        const c = s.charCodeAt(i) - 97;

        if (i !== first[c]) continue;

        let l = i;
        let r = last[c];
        let valid = true;

        for (let j = l; j <= r; j++) {
            const x = s.charCodeAt(j) - 97;

            if (first[x] < l) {
                valid = false;
                break;
            }

            r = Math.max(r, last[x]);
        }

        if (valid) {
            ranges.push([l, r]);
        }
    }

    ranges.sort((a, b) => a[1] - b[1]);

    const ans = [];
    let end = -1;

    for (const [l, r] of ranges) {
        if (l > end) {
            ans.push(s.slice(l, r + 1));
            end = r;
        }
    }

    return ans;
};