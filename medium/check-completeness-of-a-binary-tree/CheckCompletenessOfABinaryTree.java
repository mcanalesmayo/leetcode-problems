/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isCompleteTree(TreeNode root) {
        final Queue<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        
        TreeNode curr;
        while (queue.peek() != null) {
            curr = queue.poll();
            queue.add(curr.left);
            queue.add(curr.right);
        }
        
        while (!queue.isEmpty() && queue.peek() == null) {
            queue.poll();
        }
        
        return queue.isEmpty();
    }
}
