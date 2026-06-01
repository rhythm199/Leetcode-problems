/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function(nums, queries) {
    const answer = [];

    for (const [k, trim] of queries) {
        const trimmed = [];

        for (let idx = 0; idx < nums.length; idx++) {
            trimmed.push([
                nums[idx].slice(nums[idx].length - trim),
                idx
            ]);
        }

        trimmed.sort((first, second) => {
            if (first[0] === second[0]) {
                return first[1] - second[1];
            }

            return first[0].localeCompare(second[0]);
        });

        answer.push(trimmed[k - 1][1]);
    }

    return answer;
};