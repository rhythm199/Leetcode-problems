/**
 * @param {string} s
 * @return {boolean}
 */
var splitString = function(s) {

    const n = s.length;

    function dfs(index, prev) {

        if (index === n) return true;

        let curr = 0n;

        for (let i = index; i < n; i++) {

            curr = curr * 10n + BigInt(s[i]);

            if (curr === prev - 1n) {
                if (dfs(i + 1, curr))
                    return true;
            }

            if (curr >= prev)
                break;
        }

        return false;
    }

    let first = 0n;

    for (let i = 0; i < n - 1; i++) {

        first = first * 10n + BigInt(s[i]);

        if (dfs(i + 1, first))
            return true;
    }

    return false;
};