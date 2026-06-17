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
var sumNumbers = function(root) {
    function dfs(node, path) {
        if (!node) return 0;
        path = path * 10 + node.val;
        if (!node.left && !node.right) return path;
        return dfs(node.left, path) + dfs(node.right, path);
    }
    return dfs(root, 0);
};