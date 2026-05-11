/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    const res = [];

    for (const num of nums) {
        const digits = String(num);

        for (const ch of digits) {
            res.push(Number(ch));
        }
    }

    return res;
};