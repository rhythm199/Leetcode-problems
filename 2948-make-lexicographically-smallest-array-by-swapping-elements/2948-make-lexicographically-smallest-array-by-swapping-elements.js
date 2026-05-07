/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
    const n = nums.length;
    const sortedNums = [...nums].sort((a, b) => a - b);
    const groups = [];
    const numToGroup = new Map();
    
    if (n === 0) return [];
    
    let currentGroup = [sortedNums[0]];
    numToGroup.set(sortedNums[0], 0);
    groups.push(currentGroup);
    
    for (let i = 1; i < n; i++) {
        if (sortedNums[i] - sortedNums[i - 1] <= limit) {
            groups[groups.length - 1].push(sortedNums[i]);
        } else {
            groups.push([sortedNums[i]]);
        }
        numToGroup.set(sortedNums[i], groups.length - 1);
    }
    const groupPointers = new Array(groups.length).fill(0);
    const result = new Array(n);
    for (let i = 0; i < n; i++) {
        const groupIdx = numToGroup.get(nums[i]);
        const pointer = groupPointers[groupIdx];
        result[i] = groups[groupIdx][pointer];
        groupPointers[groupIdx]++;
    }
    
    return result;
};