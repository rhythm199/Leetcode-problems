/**
 * @param {string} s
 * @return {string}
 */
var longestDupSubstring = function(s) {
    const nums = Array.from(s, ch => ch.charCodeAt(0) - 97);

    const mod = 2n ** 63n - 1n;
    const base = 26n;

    let answerStart = -1;
    let answerLen = 0;

    function search(len) {
        let hash = 0n;
        let power = 1n;

        for (let i = 0; i < len; i++) {
            hash = (hash * base + BigInt(nums[i])) % mod;

            if (i > 0) {
                power = (power * base) % mod;
            }
        }

        const seen = new Map();
        seen.set(hash.toString(), [0]);

        for (let start = 1; start <= nums.length - len; start++) {

            hash =
                (
                    (
                        hash -
                        BigInt(nums[start - 1]) * power
                    ) * base +
                    BigInt(nums[start + len - 1])
                ) % mod;

            if (hash < 0) {
                hash += mod;
            }

            const key = hash.toString();

            if (seen.has(key)) {

                for (const idx of seen.get(key)) {
                    if (
                        s.slice(idx, idx + len) ===
                        s.slice(start, start + len)
                    ) {
                        return start;
                    }
                }

                seen.get(key).push(start);

            } else {
                seen.set(key, [start]);
            }
        }

        return -1;
    }

    let left = 1;
    let right = s.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        const start = search(mid);

        if (start !== -1) {
            answerStart = start;
            answerLen = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answerStart === -1
        ? ""
        : s.slice(answerStart, answerStart + answerLen);
};