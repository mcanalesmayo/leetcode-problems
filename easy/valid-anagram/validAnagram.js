/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let chars = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }
    
    for (let i = 0; i < t.length; i++) {
        let char = t.charAt(i);
        if (chars[char]) {
            chars[char]--;
            if (chars[char] === 0) {
                delete chars[char];
            }
        } else {
            return false;
        }
    }
    
    return Object.keys(chars).length === 0;
};
