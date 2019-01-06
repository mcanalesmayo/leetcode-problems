/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        if (head == null || head.next == null) {
            return head;
        }

        ListNode res = head.next, first, second;

        while (head != null && head.next != null){
            first = head.next;
            second = head.next.next;
            first.next = head;
            if (second != null && second.next != null) {
                head.next = second.next;
            } else {
                head.next = second;
            }
            head = second;
        }

        return res;
    }
}
