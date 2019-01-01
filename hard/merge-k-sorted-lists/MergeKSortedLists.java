/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {
        PriorityQueue<Integer> minHeap = new PriorityQueue<Integer>();
        ListNode res = null;
        ListNode curr;
        
        for (final ListNode ln : lists) {
            curr = ln;
            while (curr != null) {
                minHeap.add(curr.val);
                curr = curr.next;
            }
        }
        
        if (!minHeap.isEmpty()) {
            res = new ListNode(minHeap.poll());
            curr = res;
            while (!minHeap.isEmpty()) {
                curr.next = new ListNode(minHeap.poll());
                curr = curr.next;
            }
        }
        
        return res;
    }
}
