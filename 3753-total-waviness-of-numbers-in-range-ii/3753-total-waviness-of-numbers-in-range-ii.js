/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */

const { floor, max, min } = Math;

const waves = (() => {
    const arr = [];
    for (let i = 0; i < 1000; i++) {
        const r = i % 10;
        const m = floor(i / 10) % 10;
        const l = floor(i / 100) % 10;
        if ((m > max(l, r)) | (m < min(l, r)))
            arr.push(i);
    }
    return arr;
})();


const totalWaviness = (A, B) => waveCount(B) - waveCount(A - 1);

const waveCount = num => {
    if (num < 100) return 0;
    return waves.reduce((a, c) => a + countWays(num, c), 0);
};

const countWays = (num, pattern) => {
    const type = pattern < 100;
    let count = 0;
    let mult = 1;

    for (let i = 0; mult * 100 <= num; i++) {
        const pre = floor(num / (mult * 1000));
        const cur = floor(num / mult) % 1000;
        const suf = num % mult;

        const ways = max(0, pre - type + (cur > pattern));
        const edge = (cur === pattern) * (suf + 1);

        count += ways * mult + edge;
        mult *= 10;
    }

    return count;
};

