/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) {
        return false;
    }
    
    let i = 0;
    for (let j = 0; j < t.length && i < s.length; j++) {
        if (s[i] === t[j]) {
            i++;
        }
    }
    
    return i === s.length;
};
