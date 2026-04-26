/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    const solve = (start1, dur1, start2, dur2) => {
        let minFirstFinish = Infinity;
        for (let i = 0; i < start1.length; i++) {
            minFirstFinish = Math.min(minFirstFinish, start1[i] + dur1[i]);
        }

        let minOverallFinish = Infinity;
        for (let j = 0; j < start2.length; j++) {
            minOverallFinish = Math.min(minOverallFinish, Math.max(start2[j], minFirstFinish) + dur2[j]);
        }
        
        return minOverallFinish;
    };

    return Math.min(
        solve(landStartTime, landDuration, waterStartTime, waterDuration),
        solve(waterStartTime, waterDuration, landStartTime, landDuration)
    );
};