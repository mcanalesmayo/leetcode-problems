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
    let res = [], stack = [], oCurr = root;

    while (oCurr !== null || stack.length > 0) {
        if (oCurr !== null) {
            stack.push(oCurr);
            oCurr = oCurr.left;
        } else {
            let oRoot = stack.pop();
            res.push(oRoot.val);
            oCurr = oRoot.right;
        }
    }

    return res;
};
