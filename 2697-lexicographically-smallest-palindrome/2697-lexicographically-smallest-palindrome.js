/**
 * @param {string} s
 * @return {string}
 */
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let arr = s.split("");

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const ch = arr[left] < arr[right]
            ? arr[left]
            : arr[right];

        arr[left] = ch;
        arr[right] = ch;

        left++;
        right--;
    }

    return arr.join("");
};