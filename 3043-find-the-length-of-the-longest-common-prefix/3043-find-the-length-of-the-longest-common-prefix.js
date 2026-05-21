/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefix = function(arr1, arr2) {

    const prefixes = new Set();

    for (const num of arr1) {

        let str = num.toString();

        for (let i = 1; i <= str.length; i++) {
            prefixes.add(str.slice(0, i));
        }
    }

    let answer = 0;

    for (const num of arr2) {

        let str = num.toString();

        for (let i = 1; i <= str.length; i++) {

            if (prefixes.has(str.slice(0, i))) {
                answer = Math.max(answer, i);
            }
        }
    }

    return answer;
};