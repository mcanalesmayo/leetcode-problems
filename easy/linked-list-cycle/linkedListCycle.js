/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (head === null) {
        return false;
    }

    let slowI = head, fastI = head.next;
    
    while (fastI !== null) {
        if (slowI === fastI) {
            return true;
        }
        slowI = slowI.next;
        fastI = fastI.next === null ? null : fastI.next.next;
    }
    
    return false;
};
