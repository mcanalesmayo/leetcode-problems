/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode partition(ListNode head, int x) {
        final ListNode leftPartition = new ListNode(0), rightPartition = new ListNode(0);
        
        ListNode curr = head, left = leftPartition, right = rightPartition, newLn;
        while (curr != null) {
            newLn = new ListNode(curr.val);
            if (curr.val < x) {
                left.next = newLn;
                left = left.next;
            } else {
                right.next = newLn;
                right = right.next;
            }

            curr = curr.next;
        }
        left.next = rightPartition.next;
        
        return leftPartition.next;
    }
}
