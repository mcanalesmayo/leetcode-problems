/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let res = '', chars = {}, ocurrences = new Array(s.length).fill(null).map(() => []);
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
    }
    
    let aChars = Object.keys(chars);
    for (let i = 0; i < aChars.length; i++) {
        let char = aChars[i];
        let count = chars[char];
        ocurrences[count-1].push(char);
    }
    
    for (let i = s.length - 1; i >= 0; i--) {
        for (let j = 0; j < ocurrences[i].length; j++) {
            res += ocurrences[i][j].repeat(i+1);
        }
    }
    
    return res;
};
