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
    public int rob(TreeNode root) {
        int[] max = recRob(root);
        return Math.max(max[0], max[1]);
    }
    
    private int[] recRob(TreeNode root) {
        if (root == null) {
            return new int[]{0, 0};
        }

        // [0]: without root.{side}.val
        // [1]: with root.{side}.val
        int[] leftRes = recRob(root.left), rightRes = recRob(root.right);
        int withoutRootVal = leftRes[1] + rightRes[1];
        return new int[]{withoutRootVal, Math.max(withoutRootVal, root.val + leftRes[0] + rightRes[0])};
    }
}
