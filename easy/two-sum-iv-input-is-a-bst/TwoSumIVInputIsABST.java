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
    public boolean findTarget(TreeNode root, int k) {
        return recFindTarget(root, k, new HashSet<Integer>());
    }
    
    private boolean recFindTarget(TreeNode node, int k, final Set<Integer> visited) {
        if (node == null) {
            return false;
        } else if (visited.contains(k - node.val)) {
            return true;
        } else {
            visited.add(node.val);
            boolean res = recFindTarget(node.left, k, visited);
            if (res) {
                return true;
            } else {
                return recFindTarget(node.right, k, visited);
            }
        }
    }
}
