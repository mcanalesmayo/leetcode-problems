var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, res = 0, acc = {};
    
    while (j < s.length) {
        let right = s.charAt(j);
        let accRight = acc[right];

        if (accRight && accRight > i) {
            i = accRight;
        }
        
        let currLen = j - i + 1;
        if (currLen > res) {
            res = currLen;
        }
        acc[right] = ++j;
    }
    
    return res;
};