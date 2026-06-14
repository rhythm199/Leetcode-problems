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
var removeNodes = function(head) {

    const reverse = (head) => {
        let prev = null;
        let curr = head;

        while (curr) {
            let nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }

        return prev;
    };

    head = reverse(head);

    let maxSeen = head.val;
    let curr = head;

    while (curr && curr.next) {
        if (curr.next.val < maxSeen) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
            maxSeen = curr.val;
        }
    }

    return reverse(head);
};