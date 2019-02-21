/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }

    function recIsSymmetric(left, right) {
        if (left && right && left.val === right.val) {
            return recIsSymmetric(left.left, right.right) && recIsSymmetric(left.right, right.left);
        } else {
            // If they are both nulls then they are symmetric
            return !left && !right;
        }
    }
    
    return recIsSymmetric(root.left, root.right);
};
