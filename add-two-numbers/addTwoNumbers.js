/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var ptr = {next: null},
        carry = 0,
        sum;

    const zeroLn = {val: 0};
    const res = ptr;
    
    while (l1 !== zeroLn || l2 !== zeroLn || carry) {
        sum = l1.val + l2.val + carry;
        carry = parseInt(sum/10);
        ptr.next = {
            val: sum%10,
            next: null
        };
        ptr = ptr.next;
        
        l1 = l1.next ? l1.next : zeroLn;
        l2 = l2.next ? l2.next : zeroLn;
    }
    
    return res.next;
};