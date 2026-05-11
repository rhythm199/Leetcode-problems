/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) return [];

    const build = (start, end) => {
        if (start > end) return [null];

        const res = [];

        for (let root = start; root <= end; root++) {
            const leftTrees = build(start, root - 1);
            const rightTrees = build(root + 1, end);

            for (const left of leftTrees) {
                for (const right of rightTrees) {
                    const node = new TreeNode(root);
                    node.left = left;
                    node.right = right;
                    res.push(node);
                }
            }
        }

        return res;
    };

    return build(1, n);
};