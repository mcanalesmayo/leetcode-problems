/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {}, bFoundOdd = false, res = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (count[char]) {
            count[char] += 1;
        } else {
            count[char] = 1;
        }
    }
    
    let aChars = Object.keys(count);
    for (let i = 0; i < aChars.length; i++) {
        let n = count[aChars[i]];
        if (n % 2 === 0) {
            res += n;
        } else {
            res += n - 1;
            bFoundOdd = true;
        }
    }
    
    if (bFoundOdd) {
        res += 1;
    }
    
    return res;
};
