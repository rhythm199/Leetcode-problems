/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxSum = function(nums1, nums2) {
    const MOD = 1000000007n;

    let i = 0;
    let j = 0;

    let sum1 = 0n;
    let sum2 = 0n;
    let ans = 0n;

    while (i < nums1.length && j < nums2.length) {

        if (nums1[i] < nums2[j]) {
            sum1 += BigInt(nums1[i]);
            i++;
        }
        else if (nums1[i] > nums2[j]) {
            sum2 += BigInt(nums2[j]);
            j++;
        }
        else {
            ans += (sum1 > sum2 ? sum1 : sum2) + BigInt(nums1[i]);

            sum1 = 0n;
            sum2 = 0n;

            i++;
            j++;
        }
    }

    while (i < nums1.length) {
        sum1 += BigInt(nums1[i++]);
    }

    while (j < nums2.length) {
        sum2 += BigInt(nums2[j++]);
    }

    ans += (sum1 > sum2 ? sum1 : sum2);

    return Number(ans % MOD);
};