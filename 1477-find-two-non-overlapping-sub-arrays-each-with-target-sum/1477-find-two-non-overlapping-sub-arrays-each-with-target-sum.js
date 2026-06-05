/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
    const n = arr.length;

    const best = new Array(n).fill(Infinity);

    let left = 0;
    let sum = 0;

    let answer = Infinity;
    let minLen = Infinity;

    for (let right = 0; right < n; right++) {

        sum += arr[right];

        while (sum > target) {
            sum -= arr[left++];
        }

        if (sum === target) {

            const len = right - left + 1;

            if (left > 0 && best[left - 1] !== Infinity) {
                answer = Math.min(
                    answer,
                    len + best[left - 1]
                );
            }

            minLen = Math.min(minLen, len);
        }

        best[right] = minLen;
    }

    return answer === Infinity ? -1 : answer;
};