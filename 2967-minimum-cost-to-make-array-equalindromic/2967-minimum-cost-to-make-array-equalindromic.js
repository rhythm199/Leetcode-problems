/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {

    nums.sort((a, b) => a - b);

    const n = nums.length;

    const median = nums[Math.floor(n / 2)];

    function isPalindrome(x) {

        const s = x.toString();

        return s === s.split('').reverse().join('');
    }
    let left = median;

    while (!isPalindrome(left)) {
        left--;
    }

    let right = median;

    while (!isPalindrome(right)) {
        right++;
    }

    function cost(target) {

        let total = 0;

        for (const num of nums) {
            total += Math.abs(num - target);
        }

        return total;
    }

    return Math.min(cost(left), cost(right));
};