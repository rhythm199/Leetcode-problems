/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let preIdx = 0;

    function dfs(left, right) {

        if (left > right) return null;

        let rootVal = preorder[preIdx++];
        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);

        root.left = dfs(left, mid - 1);
        root.right = dfs(mid + 1, right);

        return root;
    }

    return dfs(0, inorder.length - 1);
};