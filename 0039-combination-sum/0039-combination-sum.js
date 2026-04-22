/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remaining, stack, start) => {
        if (remaining === 0) {
            result.push([...stack]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (candidates[i] <= remaining) {
                stack.push(candidates[i]);
                backtrack(remaining - candidates[i], stack, i);
                stack.pop();
            }
        }
    };

    backtrack(target, [], 0);
    return result;
};