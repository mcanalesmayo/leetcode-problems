class Solution {
    public int minDistance(String word1, String word2) {
        // 1. Get the longest common subsequence length (lcsl)
        // 2. Result is (sum of both words lengths) - 2 * lcsl
        
        int w1len = word1.length(), w2len = word2.length();
        int[][] lcsl = new int[w1len + 1][w2len + 1];
        
        // Init upper and left boundaries
        for (int i = 0; i <= w1len; i++) {
            lcsl[i][0] = 0;
        }
        for (int i = 0; i <= w2len; i++) {
            lcsl[0][i] = 0;
        }
        
        // DP approach to compute the lcsl
        for (int i = 1; i <= w1len; i++) {
            for (int j = 1; j <= w2len; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    // Common char => Increment lcsl counter
                    lcsl[i][j] = lcsl[i-1][j-1] + 1;
                } else {
                    lcsl[i][j] = Math.max(lcsl[i-1][j], lcsl[i][j-1]);
                }
            }
        }
        
        return w1len + w2len - 2 * lcsl[w1len][w2len];
    }
}
