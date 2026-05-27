/**
 * @param {number[]} w
 */
var Solution = function(w) {

    this.prefix = [];

    let sum = 0;

    for (let weight of w) {

        sum += weight;

        this.prefix.push(sum);
    }

    this.totalSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {

    // random number from 1 to totalSum
    let target =
        Math.floor(Math.random() * this.totalSum) + 1;

    let left = 0;
    let right = this.prefix.length - 1;

    while (left < right) {

        let mid =
            Math.floor((left + right) / 2);

        if (this.prefix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};