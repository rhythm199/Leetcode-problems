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

    let curr = root;

    while (curr) {
        let dummy = new Node(0);
        let tail = dummy;

        while (curr) {
            if (curr.left) {
                tail.next = curr.left;
                tail = tail.next;
            }

            if (curr.right) {
                tail.next = curr.right;
                tail = tail.next;
            }

            curr = curr.next;
        }

        curr = dummy.next;
    }

    return root;
};