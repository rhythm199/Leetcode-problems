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
var insertionSortList = function(head) {
     let dummy = new ListNode(0);

    while (head) {

        let prev = dummy;

        while (prev.next && prev.next.val < head.val) {
            prev = prev.next;
        }

        let nextNode = head.next;

        head.next = prev.next;
        prev.next = head;

        head = nextNode;
    }

    return dummy.next;
};