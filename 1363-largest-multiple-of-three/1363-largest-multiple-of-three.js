/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const cnt = Array(10).fill(0);
    let sum = 0;

    for (const d of digits) {
        cnt[d]++;
        sum += d;
    }

    const removeDigits = (arr, times) => {
        for (const d of arr) {
            while (cnt[d] > 0 && times > 0) {
                cnt[d]--;
                times--;
            }
            if (times === 0) return true;
        }
        return false;
    };

    if (sum % 3 === 1) {
        if (!removeDigits([1,4,7], 1)) {
            removeDigits([2,5,8], 2);
        }
    } else if (sum % 3 === 2) {
        if (!removeDigits([2,5,8], 1)) {
            removeDigits([1,4,7], 2);
        }
    }

    let ans = "";

    for (let d = 9; d >= 0; d--) {
        ans += String(d).repeat(cnt[d]);
    }

    if (ans.length === 0) return "";

    if (ans[0] === '0') return "0";

    return ans;
};