/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null || head.next === null) {
        return null;
    }

    let bExistsCycle = false, slowI = head, fastI = head;
    
    do {
        slowI = slowI.next;
        fastI = fastI.next === null ? null : fastI.next.next;
        if (slowI === fastI) {
            bExistsCycle = true;
            break;
        }
    } while (fastI !== null);
    
    if (!bExistsCycle) {
        return null;
    }
    
    // Following Floyd's cycle-finding algorithm
    slowI = head;
    while (slowI !== fastI) {
        slowI = slowI.next;
        fastI = fastI.next;
    }
    
    return slowI;
};
