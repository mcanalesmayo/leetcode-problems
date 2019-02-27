/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    function recRemoveNthFromEnd(node, target) {
        if (node.next === null) {
            return 1;
        }
        
        let nextPos = recRemoveNthFromEnd(node.next, target);
        if (nextPos === target) {
            node.next = node.next.next;
        }
        
        return nextPos + 1;
    }
    
    recRemoveNthFromEnd(dummy, n);
    return dummy.next;
};
