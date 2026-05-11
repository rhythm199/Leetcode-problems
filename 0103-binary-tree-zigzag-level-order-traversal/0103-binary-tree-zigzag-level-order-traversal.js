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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];

    const res = [];
    const queue = [root];
    let leftToRight = true;

    while (queue.length) {
        const size = queue.length;
        const level = Array(size);

        for (let i = 0; i < size; i++) {
            const node = queue.shift();

            const idx = leftToRight ? i : size - 1 - i;

            level[idx] = node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        leftToRight = !leftToRight;

        res.push(level);
    }

    return res;
};