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
var verticalTraversal = function(root) {

    const nodes = [];

    function dfs(node, row, col) {

        if (!node) return;

        nodes.push([col, row, node.val]);

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }

    dfs(root, 0, 0);

    nodes.sort((a, b) => {

        if (a[0] !== b[0]) {
            return a[0] - b[0];
        }

        if (a[1] !== b[1]) {
            return a[1] - b[1];
        }
        return a[2] - b[2];
    });

    const map = new Map();

    for (const [col, row, val] of nodes) {

        if (!map.has(col)) {
            map.set(col, []);
        }

        map.get(col).push(val);
    }

    return [...map.values()];
};