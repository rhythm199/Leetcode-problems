/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDifference = function(nums) {

    let n = nums.length / 2;
    let total = nums.reduce((a, b) => a + b, 0);

    let left = nums.slice(0, n);
    let right = nums.slice(n);

    const generate = (arr) => {

        let map = Array(arr.length + 1)
            .fill(0)
            .map(() => []);

        let size = 1 << arr.length;

        for (let mask = 0; mask < size; mask++) {

            let bits = 0;
            let sum = 0;

            for (let i = 0; i < arr.length; i++) {

                if (mask & (1 << i)) {
                    bits++;
                    sum += arr[i];
                }
            }

            map[bits].push(sum);
        }

        return map;
    };

    let leftSums = generate(left);
    let rightSums = generate(right);

    for (let arr of rightSums) {
        arr.sort((a, b) => a - b);
    }

    let ans = Infinity;

    const lowerBound = (arr, target) => {

        let l = 0;
        let r = arr.length;

        while (l < r) {

            let mid = Math.floor((l + r) / 2);

            if (arr[mid] < target) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        return l;
    };

    for (let k = 0; k <= n; k++) {

        for (let leftSum of leftSums[k]) {

            let target = total / 2 - leftSum;

            let arr = rightSums[n - k];

            let idx = lowerBound(arr, target);

            if (idx < arr.length) {

                let sum1 = leftSum + arr[idx];

                ans = Math.min(
                    ans,
                    Math.abs(total - 2 * sum1)
                );
            }

            if (idx > 0) {

                let sum1 = leftSum + arr[idx - 1];

                ans = Math.min(
                    ans,
                    Math.abs(total - 2 * sum1)
                );
            }
        }
    }

    return ans;
};