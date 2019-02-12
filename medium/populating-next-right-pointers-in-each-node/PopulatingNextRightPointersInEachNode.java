/**
 * Definition for binary tree with next pointer.
 * public class TreeLinkNode {
 *     int val;
 *     TreeLinkNode left, right, next;
 *     TreeLinkNode(int x) { val = x; }
 * }
 */
public class Solution {
    public void connect(TreeLinkNode root) {
        if (root == null) {
            return;
        }
        
        final Queue<TreeLinkNode> queue = new LinkedList<TreeLinkNode>();
        root.next = null;
        if (root.left != null) {
            queue.add(root.left);
            queue.add(root.right);
        }
        
        TreeLinkNode currTLN, nextTLN;
        int nNodes = 2;
        // Will be empty after the last tree level is processed
        while (!queue.isEmpty()) {
            // Since it's a perfect binary tree, it's known that at this point there are exactly nNodes
            currTLN = queue.remove();
            for (int i = 0; i < nNodes - 1; i++) {
                nextTLN = queue.remove();
                currTLN.next = nextTLN;
                
                // No need to check both sides, as it's a perfect binary tree
                if (currTLN.left != null) {
                    queue.add(currTLN.left);
                    queue.add(currTLN.right);
                }
                currTLN = nextTLN;
            }
            // Last element will always have null
            if (currTLN.left != null) {
                queue.add(currTLN.left);
                queue.add(currTLN.right);
            }

            nNodes *= 2;
        }
    }
}
