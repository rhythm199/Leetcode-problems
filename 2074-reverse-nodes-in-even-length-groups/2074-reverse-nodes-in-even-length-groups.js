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
var reverseEvenLengthGroups = function(head) {
    let dummy = new ListNode(0, head);

    let prevGroupTail = dummy;
    let curr = head;

    let groupSize = 1;

    while (curr) {
        let start = curr;
        let count = 0;

        while (curr && count < groupSize) {
            curr = curr.next;
            count++;
        }

        if (count % 2 === 0) {
            let prev = curr;
            let node = start;

            for (let i = 0; i < count; i++) {
                let nxt = node.next;
                node.next = prev;
                prev = node;
                node = nxt;
            }

            prevGroupTail.next = prev;
            prevGroupTail = start;
        } else {
            prevGroupTail = start;

            for (let i = 1; i < count; i++) {
                prevGroupTail = prevGroupTail.next;
            }
        }

        groupSize++;
    }

    return dummy.next;
};