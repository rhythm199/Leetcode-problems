/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    let answer = Infinity;

    for (let landIdx = 0; landIdx < landStartTime.length; landIdx++) {
        const landFinish =
            landStartTime[landIdx] + landDuration[landIdx];

        for (let waterIdx = 0; waterIdx < waterStartTime.length; waterIdx++) {
            const waterBegin = Math.max(
                landFinish,
                waterStartTime[waterIdx]
            );

            answer = Math.min(
                answer,
                waterBegin + waterDuration[waterIdx]
            );
        }
    }

    for (let waterIdx = 0; waterIdx < waterStartTime.length; waterIdx++) {
        const waterFinish =
            waterStartTime[waterIdx] + waterDuration[waterIdx];

        for (let landIdx = 0; landIdx < landStartTime.length; landIdx++) {
            const landBegin = Math.max(
                waterFinish,
                landStartTime[landIdx]
            );

            answer = Math.min(
                answer,
                landBegin + landDuration[landIdx]
            );
        }
    }

    return answer;
};