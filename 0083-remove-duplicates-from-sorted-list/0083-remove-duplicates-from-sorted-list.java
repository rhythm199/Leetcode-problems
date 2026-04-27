/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode h1=head;
        ListNode h2=head;
        while(h1!=null && h1.next!=null){
            h2=h1.next;
            while(h2!=null){
                if(h1.val==h2.val)
                       h1.next=h2.next;
                else
                    break;
                h2=h2.next;
            }
            h1=h1.next;
        }
        return head;
    }
}