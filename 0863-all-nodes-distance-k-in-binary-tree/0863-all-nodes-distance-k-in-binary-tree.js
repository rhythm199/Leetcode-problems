/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
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
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    const parent = new Map();

    function dfs(node, par) {
        if (!node) return;

        parent.set(node, par);

        dfs(node.left, node);
        dfs(node.right, node);
    }

    dfs(root, null);

    const queue = [target];
    const visited = new Set([target]);

    let distance = 0;

    while (queue.length) {

        if (distance === k) {
            return queue.map(node => node.val);
        }

        let size = queue.length;

        while (size--) {
            const node = queue.shift();

            const neighbors = [
                node.left,
                node.right,
                parent.get(node)
            ];

            for (const next of neighbors) {
                if (next && !visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }

        distance++;
    }

    return [];
};