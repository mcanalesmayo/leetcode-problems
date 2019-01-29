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
    
    private void recLargestValues(final TreeNode node, final List<Integer> res, int depth) {
        if (node == null) {
            return;
        }
        
        if (res.size() == depth) {
            res.add(depth, node.val);
        } else if (res.get(depth) < node.val) {
            res.set(depth, node.val);
        }

        depth++;
        recLargestValues(node.left, res, depth);
        recLargestValues(node.right, res, depth);
    }
    
    public List<Integer> largestValues(TreeNode root) {
        final List<Integer> res = new ArrayList<Integer>();
        
        recLargestValues(root, res, 0);
        
        return res;
    }
}
