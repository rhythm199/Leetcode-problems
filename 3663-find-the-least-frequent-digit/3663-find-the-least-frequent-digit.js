/**
 * @param {number} n
 * @return {number}
 */
var getLeastFrequentDigit = function(n) {
    const freq = Array(10).fill(0);

    while (n > 0) {
        freq[n % 10]++;
        n = Math.floor(n / 10);
    }

    let ans = 0;
    let minFreq = Infinity;

    for (let d = 0; d <= 9; d++) {
        if (freq[d] > 0 && freq[d] < minFreq) {
            minFreq = freq[d];
            ans = d;
        }
    }

    return ans;
};