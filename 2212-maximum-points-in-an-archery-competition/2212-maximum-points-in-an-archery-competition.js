/**
 * @param {number} numArrows
 * @param {number[]} aliceArrows
 * @return {number[]}
 */
var maximumBobPoints = function(numArrows, aliceArrows) {
    let bestScore = 0;
    let best = Array(12).fill(0);

    for (let mask = 0; mask < (1 << 12); mask++) {
        let arrowsUsed = 0;
        let score = 0;
        const curr = Array(12).fill(0);

        for (let i = 0; i < 12; i++) {
            if ((mask >> i) & 1) {
                curr[i] = aliceArrows[i] + 1;
                arrowsUsed += curr[i];
                score += i;
            }
        }

        if (arrowsUsed > numArrows) continue;

        curr[0] += numArrows - arrowsUsed;

        if (score > bestScore) {
            bestScore = score;
            best = [...curr];
        }
    }

    return best;
};