/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
     let dummy = new ListNode(0, head);
    let groupPrev = dummy;

    while (true) {
        let kth = groupPrev;
        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }
        if (!kth) break;

        let groupNext = kth.next;
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }

    return dummy.next;
};