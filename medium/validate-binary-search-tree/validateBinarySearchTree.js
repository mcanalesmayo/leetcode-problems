/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var isValidBST = function(root) {
    function isValidBSTrec(root, min, max) {
        let bRes = true;

        // Preorder
        // Check left node
        if (root.left !== null) {
            if (root.left.val > min && root.left.val < root.val) {
                bRes = isValidBSTrec(root.left, min, root.val);
            } else {
                bRes = false;
            }
        }

        // It's not needed to check the right node if the left side validation failed
        if (bRes && root.right !== null) {
            if (root.right.val < max && root.right.val > root.val) {
                bRes = isValidBSTrec(root.right, root.val, max);
            } else {
                bRes = false;
            }
        }

        return bRes;
    }
    
    // Check against invalid or empty params
    if (root && root.val !== null) {
        return isValidBSTrec(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    } else {
        return true;
    }
};
