/**
 * @param {number[]} nums
 * @return {number}
 */
var findTheArrayConcVal = function(nums) {

    let left = 0;
    let right = nums.length - 1;

    let answer = 0;

    while (left <= right) {

        if (left === right) {

            answer += nums[left];

        } else {

            answer += Number(
                nums[left].toString() +
                nums[right].toString()
            );
        }

        left++;
        right--;
    }

    return answer;
};