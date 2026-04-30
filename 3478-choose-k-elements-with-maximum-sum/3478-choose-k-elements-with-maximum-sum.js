/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var minHeap = () => {
  const heap = [];

  const queue = (value) => {
    heap.push(value);

    let currentIndex = heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (heap[parentIndex] > value) {
      let temp = heap[parentIndex];
      heap[parentIndex] = value;
      heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  };

  const dequeue = () => {
    if (heap.length === 0) return undefined;

    const removed = heap[0];

    if (heap.length === 1) {
      heap.pop();
      return removed;
    }

    heap[0] = heap.pop();
    let currentIndex = 0;

    while (true) {
      let leftIndex = currentIndex * 2 + 1;
      let rightIndex = currentIndex * 2 + 2;
      let minIndex = currentIndex;

      if (leftIndex < heap.length && heap[leftIndex] < heap[minIndex]) {
        minIndex = leftIndex;
      }

      if (rightIndex < heap.length && heap[rightIndex] < heap[minIndex]) {
        minIndex = rightIndex;
      }

      if (minIndex === currentIndex) break;

      let temp = heap[currentIndex];
      heap[currentIndex] = heap[minIndex];
      heap[minIndex] = temp;

      currentIndex = minIndex;
    }

    return removed;
  };

  const len = () => {
    return heap.length;
  };
  return { queue, dequeue, len };
};

var findMaxSum = function (nums1, nums2, k) {
  const heap = minHeap();
  const pairs = [];
  const result = [];
  let sum = 0;
  let minimalNum = Infinity;
  const processed = {};

  for (let i = 0; i < nums1.length; i++) {
    pairs.push([nums1[i], nums2[i], i]);

    minimalNum = Math.min(minimalNum, nums1[i]);
  }

  pairs.sort((a, b) => b[0] - a[0]);

  for (let i = pairs.length - 1; i >= 0; i--) {
    const [num, cost, index] = pairs[i];

    if (num === minimalNum) {
      result[index] = 0;
    } else if (processed[num]) {
      result[index] = processed[num];
    } else {
      result[index] = sum;
    }

    if (!processed[num]) {
      processed[num] = sum;
    }

    heap.queue(cost);
    sum += cost;

    if (heap.len() > k) {
      sum -= heap.dequeue();
    }
  }

  return result;
};