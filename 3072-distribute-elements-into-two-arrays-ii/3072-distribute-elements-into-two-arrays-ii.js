/**
 * @param {number[]} nums
 * @return {number[]}
 */
class Fenwick {
    constructor(n) {
        this.bit = Array(n + 1).fill(0);
    }

    update(i, val) {
        while (i < this.bit.length) {
            this.bit[i] += val;
            i += i & -i;
        }
    }

    query(i) {
        let sum = 0;

        while (i > 0) {
            sum += this.bit[i];
            i -= i & -i;
        }

        return sum;
    }
}

var resultArray = function(nums) {
    const sorted = [...new Set(nums)].sort((a, b) => a - b);

    const rank = new Map();

    for (let i = 0; i < sorted.length; i++) {
        rank.set(sorted[i], i + 1);
    }

    const bit1 = new Fenwick(sorted.length);
    const bit2 = new Fenwick(sorted.length);

    const arr1 = [nums[0]];
    const arr2 = [nums[1]];

    bit1.update(rank.get(nums[0]), 1);
    bit2.update(rank.get(nums[1]), 1);

    for (let i = 2; i < nums.length; i++) {
        const x = nums[i];
        const r = rank.get(x);

        const greater1 = arr1.length - bit1.query(r);
        const greater2 = arr2.length - bit2.query(r);

        if (
            greater1 > greater2 ||
            (greater1 === greater2 && arr1.length <= arr2.length)
        ) {
            arr1.push(x);
            bit1.update(r, 1);
        } else {
            arr2.push(x);
            bit2.update(r, 1);
        }
    }

    return [...arr1, ...arr2];
};