/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let ans = Infinity;

    for (let num of nums) {
        let digitSum = 0;

        while (num > 0) {
            digitSum += num % 10;
            num = Math.floor(num / 10);
        }

        ans = Math.min(ans, digitSum);
    }

    return ans;
};