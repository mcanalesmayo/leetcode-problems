/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d) {
    if (d === 1) {
        const newRoot = new TreeNode(v);
        newRoot.left = root;
        
        return newRoot;
    }
    
    function recAddOneRow(node, depth) {
        // Base case
        if (depth === 2) {
            const newLeft = new TreeNode(v);
            const newRight = new TreeNode(v);
            newLeft.left = node.left;
            newRight.right = node.right;
            node.left = newLeft;
            node.right = newRight;
            
            return;
        }
        
        if (node.left !== null) {
            recAddOneRow(node.left, depth - 1);
        }
        if (node.right !== null) {
            recAddOneRow(node.right, depth - 1);
        }
    }
    
    recAddOneRow(root, d);
    return root;
};
