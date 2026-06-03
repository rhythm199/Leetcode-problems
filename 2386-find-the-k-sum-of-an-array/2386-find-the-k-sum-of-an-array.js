/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var kSum = function(nums, k) {
    let maxSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) maxSum += nums[i];
        nums[i] = Math.abs(nums[i]);
    }

    nums.sort((a, b) => a - b);

    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this.bubbleUp();
        }

        bubbleUp() {
            let idx = this.heap.length - 1;

            while (idx > 0) {
                let parent = Math.floor((idx - 1) / 2);

                if (this.heap[parent][0] <= this.heap[idx][0]) break;

                [this.heap[parent], this.heap[idx]] =
                    [this.heap[idx], this.heap[parent]];

                idx = parent;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            const top = this.heap[0];
            this.heap[0] = this.heap.pop();

            this.bubbleDown();

            return top;
        }

        bubbleDown() {
            let idx = 0;

            while (true) {
                let left = idx * 2 + 1;
                let right = idx * 2 + 2;
                let smallest = idx;

                if (
                    left < this.heap.length &&
                    this.heap[left][0] < this.heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right][0] < this.heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === idx) break;

                [this.heap[idx], this.heap[smallest]] =
                    [this.heap[smallest], this.heap[idx]];

                idx = smallest;
            }
        }
    }

    const pq = new MinHeap();

    pq.push([nums[0], 0]);

    let ans = maxSum;

    while (--k > 0) {
        const [cur, idx] = pq.pop();

        ans = maxSum - cur;

        if (idx + 1 < nums.length) {
            pq.push([
                cur + nums[idx + 1],
                idx + 1
            ]);

            pq.push([
                cur - nums[idx] + nums[idx + 1],
                idx + 1
            ]);
        }
    }

    return ans;
};