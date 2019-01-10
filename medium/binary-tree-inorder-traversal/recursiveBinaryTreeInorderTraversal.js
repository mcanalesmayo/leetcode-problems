/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    return recInorderTraversal(root);
};

function recInorderTraversal(root) {
    if (root === null) {
        return [];
    }

    let res = [], aLeftNodes = recInorderTraversal(root.left), aRightNodes = recInorderTraversal(root.right);
    
    for (let i = 0; i < aLeftNodes.length; i++) {
        res.push(aLeftNodes[i]);
    }
    res.push(root.val);
    for (let i = 0; i < aRightNodes.length; i++) {
        res.push(aRightNodes[i]);
    }
    
    return res;
}