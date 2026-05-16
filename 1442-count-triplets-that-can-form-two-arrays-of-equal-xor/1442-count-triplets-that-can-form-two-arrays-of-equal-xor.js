/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
     let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let xor = 0;

        for (let k = i; k < arr.length; k++) {
            xor ^= arr[k];
            if (xor === 0 && k > i) {
                count += (k - i);
            }
        }
    }

    return count;
};