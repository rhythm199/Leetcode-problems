/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {

    const gcd = (a, b) => {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    };

    let curr = head;

    while (curr && curr.next) {

        let g = gcd(curr.val, curr.next.val);

        let node = new ListNode(g);

        node.next = curr.next;
        curr.next = node;

        curr = node.next;
    }

    return head;
};