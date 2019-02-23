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
var longestUnivaluePath = function(root) {
    if (root === null) {
        return 0;
    }
    
    let maxLength = 0;
    function recLongestUnivaluePath(node, prevNodeVal) {
        if (node === null) {
            return 0;
        }

        let numEdges = 0, numEdgesLeft = 0, numEdgesRight = 0;
        if (node.left) {
            if (node.val === node.left.val) {
                numEdgesLeft = 1 + recLongestUnivaluePath(node.left, node.left.val);
            } else {
                recLongestUnivaluePath(node.left, node.left.val);
            }
        }
        
        if (node.right) {
            if (node.val === node.right.val) {
                numEdgesRight = 1 + recLongestUnivaluePath(node.right, node.right.val);
            } else {
                recLongestUnivaluePath(node.right, node.right.val);
            }
        }
        
        maxLength = Math.max(maxLength, numEdgesLeft + numEdgesRight);
        return Math.max(numEdgesLeft, numEdgesRight);
    }
    
    recLongestUnivaluePath(root, root.val);
    return maxLength;
};
