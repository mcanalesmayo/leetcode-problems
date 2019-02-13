/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root === null) {
        return [];
    }

    function recPathSum(node, sum) {
        let isLeaf = true, recRes = [], newTarget = sum - node.val;
        
        if (node.left !== null) {
            let leftRes = recPathSum(node.left, newTarget);
            if (leftRes.length > 0) {
                leftRes.forEach(arr => {
                    arr.push(node.val);
                    recRes.push(arr);
                });
            }
            isLeaf = false;
        }
        
        if (node.right !== null) {
            let rightRes = recPathSum(node.right, newTarget);
            if (rightRes.length > 0) {
                rightRes.forEach(arr => {
                    arr.push(node.val);
                    recRes.push(arr);
                });
            }
            isLeaf = false;
        }
        
        if (!isLeaf) {
            return recRes;
        }
        
        // This is a leaf
        if (newTarget === 0) {
            return [ [ node.val ] ];
        } else {
            return [];
        }
    }
    
    return recPathSum(root, sum).map(arr => arr.reverse());
};
