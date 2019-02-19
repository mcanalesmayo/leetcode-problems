/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let chars = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (chars[char] !== undefined) {
            chars[char] = false;
        } else {
            chars[char] = true;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (chars[char]) {
            return i;
        }
    }
    
    return -1;
};
