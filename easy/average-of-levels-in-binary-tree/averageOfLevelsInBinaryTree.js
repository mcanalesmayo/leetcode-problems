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
var averageOfLevels = function(root) {
    let levelsAvg = [];
    
    function recLevelsAvg(node, level) {
        if (node === null) {
            return;
        }
        
        if (levelsAvg[level]) {
            levelsAvg[level].numNodes += 1;
            levelsAvg[level].sum += node.val;
        } else {
            levelsAvg[level] = {};
            levelsAvg[level].numNodes = 1;
            levelsAvg[level].sum = node.val;
        }
        recLevelsAvg(node.left, level + 1);
        recLevelsAvg(node.right, level + 1);
    }
    
    recLevelsAvg(root, 0);
    
    console.log(levelsAvg);
    return levelsAvg.map(level => level.sum/level.numNodes);
};
