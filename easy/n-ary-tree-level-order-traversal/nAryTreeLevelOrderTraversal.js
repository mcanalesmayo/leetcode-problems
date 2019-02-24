/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    
    let res = [], queue = [ root ], nNodes = queue.length;
    while (queue.length > 0) {
        let currLevel = [];
        
        for (let i = 0; i < nNodes; i++) {
            let curr = queue.shift();
            currLevel.push(curr.val);

            if (curr.children !== null) {
                for (let j = 0; j < curr.children.length; j++) {
                    queue.push(curr.children[j]);
                }
            }
        }
        res.push(currLevel);
        nNodes = queue.length;
    }
    
    return res;
};
