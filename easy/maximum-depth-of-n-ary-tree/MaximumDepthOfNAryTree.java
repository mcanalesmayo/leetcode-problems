/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> children;

    public Node() {}

    public Node(int _val,List<Node> _children) {
        val = _val;
        children = _children;
    }
};
*/
class Solution {
    
    private int recMaxDepth(final Node node, int depth) {
        if (node.children.size() > 0) {
            depth++;
            int max = 0;
            for (final Node child : node.children) {
                max = Math.max(max, recMaxDepth(child, depth));
            }
            
            return max;
        } else {
            return depth;
        }
    }
    
    public int maxDepth(Node root) {
        if (root == null) {
            return 0;
        } else {
            return recMaxDepth(root, 1);
        }
    }
}
