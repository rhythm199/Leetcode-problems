/**
 * @param {number[]} nums
 * @return {number}
 */
var maxGoodNumber = function(nums) {
    let answer = 0;

    const toBinary = nums.map(num => num.toString(2));

    const permutations = [
        [0, 1, 2],
        [0, 2, 1],
        [1, 0, 2],
        [1, 2, 0],
        [2, 0, 1],
        [2, 1, 0]
    ];

    for (const order of permutations) {
        const binaryString =
            toBinary[order[0]] +
            toBinary[order[1]] +
            toBinary[order[2]];

        answer = Math.max(
            answer,
            parseInt(binaryString, 2)
        );
    }

    return answer;
};