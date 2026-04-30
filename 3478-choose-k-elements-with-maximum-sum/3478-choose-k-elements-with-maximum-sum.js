/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var findMaxSum = function(nums1, nums2, k) {
    const n = nums1.length;
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push([nums1[i], i]);
    }
    arr.sort((a, b) => a[0] - b[0]);
    const res = Array(n).fill(0);
    const heap = [];
    let sum = 0;

    function push(val) {
        heap.push(val);
        heap.sort((a, b) => a - b);
        sum += val;

        if (heap.length > k) {
            sum -= heap.shift();
        }
    }

    let j = 0;
    for (let i = 0; i < n; i++) {
        const [val, idx] = arr[i];
        while (j < n && arr[j][0] < val) {
            push(nums2[arr[j][1]]);
            j++;
        }
        res[idx] = sum;
    }

    return res;
};