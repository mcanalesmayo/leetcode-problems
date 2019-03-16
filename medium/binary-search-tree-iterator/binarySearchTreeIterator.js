/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    // We can just think of the problem as it was something like
    // "Implement a BST in-order iterator", meaning that
    // firstly leftmost nodes of any subtree has to be returned,
    // then the root of the subtree and then the in-order right subtree.
    
    if (!root) {
        this.stack = [];
        return;
    }
    
    this.stack = [ root ];
    
    let curr = root;
    while ((curr = curr.left) !== null) {
        this.stack.push(curr);
    }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const next = this.stack.pop();
    
    let curr = next;
    if (curr.right !== null) {
        curr = curr.right;
        this.stack.push(curr);
        
        while ((curr = curr.left) !== null) {
            this.stack.push(curr);
        }
    }
    
    return next.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = Object.create(BSTIterator).createNew(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
