/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
     queries.sort((a, b) => a[0] - b[0]);

    const available = new MaxHeap();
    const used = new MinHeap();

    let q = 0;
    let usedCount = 0;

    for (let i = 0; i < nums.length; i++) {

        while (q < queries.length && queries[q][0] <= i) {
            available.push(queries[q][1]);
            q++;
        }

        while (used.size() && used.top() < i) {
            used.pop();
        }

        while (used.size() < nums[i]) {

            while (available.size() && available.top() < i) {
                available.pop();
            }

            if (!available.size()) {
                return -1;
            }

            used.push(available.pop());
            usedCount++;
        }
    }
      return queries.length - usedCount;
};