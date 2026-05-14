/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {

    let map = new Map();

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    let postIdx = postorder.length - 1;

    function dfs(left, right) {

        if (left > right) return null;

        let rootVal = postorder[postIdx--];
        let root = new TreeNode(rootVal);

        let mid = map.get(rootVal);
        root.right = dfs(mid + 1, right);
        root.left = dfs(left, mid - 1);

        return root;
    }

    return dfs(0, inorder.length - 1);
};