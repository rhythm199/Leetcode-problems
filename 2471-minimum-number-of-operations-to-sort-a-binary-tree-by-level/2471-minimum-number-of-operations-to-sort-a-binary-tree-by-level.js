/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minimumOperations = function(root) {
    let ans = 0;

    const getMinSwaps = (arr) => {
        const sorted = [...arr].sort((a, b) => a - b);

        const pos = new Map();

        for (let i = 0; i < arr.length; i++) {
            pos.set(arr[i], i);
        }

        let swaps = 0;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== sorted[i]) {
                swaps++;

                const j = pos.get(sorted[i]);

                pos.set(arr[i], j);
                pos.set(sorted[i], i);

                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        return swaps;
    };

    const queue = [root];

    while (queue.length) {
        const size = queue.length;

        const level = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            level.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        ans += getMinSwaps(level);
    }

    return ans;
};