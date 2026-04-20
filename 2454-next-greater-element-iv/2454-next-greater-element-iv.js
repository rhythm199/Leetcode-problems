/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const s1 = [];
    const s2 = [];

    for (let i = 0; i < n; i++) {
        while (s2.length && nums[i] > nums[s2[s2.length - 1]]) {
            res[s2.pop()] = nums[i];
        }

        const temp = [];
        while (s1.length && nums[i] > nums[s1[s1.length - 1]]) {
            temp.push(s1.pop());
        }

        while (temp.length) {
            s2.push(temp.pop());
        }

        s1.push(i);
    }

    return res;
};