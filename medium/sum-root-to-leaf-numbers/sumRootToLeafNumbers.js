/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let res = 0;
    
    function recSumNumbers(node, acc) {
        let shiftedAcc = acc * 10 + node.val;
        if (node.left === null && node.right === null) {
            // Reached a leaf
            res += shiftedAcc;
        }

        if (node.left !== null) {
            recSumNumbers(node.left, shiftedAcc)
        }
        if (node.right !== null) {
            recSumNumbers(node.right, shiftedAcc)
        }
    }
    
    if (root !== null) {
        recSumNumbers(root, 0);
    }
    
    return res;
};
