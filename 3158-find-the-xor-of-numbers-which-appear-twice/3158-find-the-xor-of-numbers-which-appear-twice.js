/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
     const map = new Map();
    let xor = 0;

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (let [num, count] of map) {
        if (count === 2) {
            xor ^= num;
        }
    }

    return xor;
};