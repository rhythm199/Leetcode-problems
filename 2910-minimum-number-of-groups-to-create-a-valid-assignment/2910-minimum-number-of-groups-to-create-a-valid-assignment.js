/**
 * @param {number[]} balls
 * @return {number}
 */
var minGroupsForValidAssignment = function(nums) {
    const freq = new Map();

    for (const x of nums) {
        freq.set(x, (freq.get(x) || 0) + 1);
    }

    const counts = [...freq.values()];
    const minFreq = Math.min(...counts);

    for (let k = minFreq; k >= 1; k--) {
        let groups = 0;
        let valid = true;

        for (const f of counts) {
            let found = false;

            for (let big = Math.floor(f / (k + 1)); big >= 0; big--) {
                const rem = f - big * (k + 1);

                if (rem % k === 0) {
                    groups += big + rem / k;
                    found = true;
                    break;
                }
            }

            if (!found) {
                valid = false;
                break;
            }
        }

        if (valid) return groups;
    }

    return nums.length;
};