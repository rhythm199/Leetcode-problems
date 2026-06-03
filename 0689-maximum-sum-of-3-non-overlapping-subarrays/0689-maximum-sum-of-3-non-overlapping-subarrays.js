/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSumOfThreeSubarrays = function(nums, k) {
    const n = nums.length;

    const prefix = Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    const window = [];

    for (let i = 0; i <= n - k; i++) {
        window.push(prefix[i + k] - prefix[i]);
    }

    const m = window.length;

    const left = Array(m);
    let best = 0;

    for (let i = 0; i < m; i++) {
        if (window[i] > window[best]) {
            best = i;
        }
        left[i] = best;
    }

    const right = Array(m);
    best = m - 1;

    for (let i = m - 1; i >= 0; i--) {
        if (window[i] >= window[best]) {
            best = i;
        }
        right[i] = best;
    }

    let maxSum = 0;
    let ans = [];

    for (let mid = k; mid < m - k; mid++) {
        const l = left[mid - k];
        const r = right[mid + k];

        const total =
            window[l] +
            window[mid] +
            window[r];

        if (total > maxSum) {
            maxSum = total;
            ans = [l, mid, r];
        }
    }

    return ans;
};