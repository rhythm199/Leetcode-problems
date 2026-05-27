/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function(rains) {

    const n = rains.length;

    const ans = new Array(n).fill(1);

    const lastFilled = new Map();

    const dryDays = [];

    function upperBound(arr, target) {

        let left = 0;
        let right = arr.length;

        while (left < right) {

            let mid = Math.floor((left + right) / 2);

            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    for (let i = 0; i < n; i++) {

        if (rains[i] === 0) {

            dryDays.push(i);

        } else {

            let lake = rains[i];

            ans[i] = -1;

            if (lastFilled.has(lake)) {

                let prevDay = lastFilled.get(lake);

                let idx = upperBound(dryDays, prevDay);

                if (idx === dryDays.length) {
                    return [];
                }

                ans[dryDays[idx]] = lake;

                dryDays.splice(idx, 1);
            }

            lastFilled.set(lake, i);
        }
    }

    return ans;
};