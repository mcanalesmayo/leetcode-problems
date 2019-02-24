/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // The kth smallest element is the (n-k)th element following inorder traversal (left, root, right)
    let res, nth = 0;

    function recKthSmallest(node, k) {
        if (node === null) {
            return;
        }
        
        recKthSmallest(node.left, k);
        nth++;
        if (nth === k) {
            res = node.val;
            return;
        }
        recKthSmallest(node.right, k);
    }
    
    recKthSmallest(root, k);
    return res;
};
