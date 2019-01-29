class Solution {
    private static int ALPHABET_BASE = (int) 'a';
    private static int ALPHABET_SIZE = 26;
    
    private char shift(char c, int shiftN) {
        return (char)((c + shiftN - ALPHABET_BASE) % ALPHABET_SIZE + ALPHABET_BASE);
    }
    
    public String shiftingLetters(String S, int[] shifts) {
        final char[] res = new char[S.length()];
        
        int acc = 0;
        for (int i = S.length() - 1; i >= 0; i--) {
            acc += shifts[i];
            acc = acc % ALPHABET_SIZE;
            res[i] = shift(S.charAt(i), acc);
        }
        
        return new String(res);
    }
}
