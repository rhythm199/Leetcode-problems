/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
     if (!root) return root;

    let leftMost = root;

    while (leftMost.left) {
        let curr = leftMost;

        while (curr) {
            // Connect left -> right
            curr.left.next = curr.right;

            // Connect right -> next node's left
            if (curr.next) {
                curr.right.next = curr.next.left;
            }

            curr = curr.next;
        }

        leftMost = leftMost.left;
    }

    return root;
};