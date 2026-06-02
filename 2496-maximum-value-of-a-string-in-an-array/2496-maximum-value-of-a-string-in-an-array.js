/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let ans = 0;

    for (const str of strs) {

        let isNumeric = true;

        for (const ch of str) {
            if (ch < '0' || ch > '9') {
                isNumeric = false;
                break;
            }
        }

        const value = isNumeric
            ? Number(str)
            : str.length;

        ans = Math.max(ans, value);
    }

    return ans;
};