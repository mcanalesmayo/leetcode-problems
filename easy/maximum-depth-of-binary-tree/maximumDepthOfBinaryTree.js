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
var maxDepth = function(root) {
    let max = 0;
    
    function recMaxDepth(node, depth) {
        if (!node) {
            return;
        }
        
        max = Math.max(max, depth);
        recMaxDepth(node.left, depth + 1);
        recMaxDepth(node.right, depth + 1);
    }
    
    recMaxDepth(root, 1);
    
    return max;
};
