/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const charCodeShift = 97, numLowercaseLetters = 26;
    
    let chars = new Array(numLowercaseLetters).fill(0), anagrams = {}, res = [];
    
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i];
        for (let j = 0; j < str.length; j++) {
            chars[str.charCodeAt(j) - charCodeShift]++;
        }
        
        let currKey = chars.toString();
        if (anagrams[currKey]) {
            anagrams[currKey].push(str);
        } else {
            anagrams[currKey] = [ str ];
        }

        // Reset
        chars.fill(0);
    }
    
    let anagramsKeys = Object.keys(anagrams);
    for (let i = 0; i < anagramsKeys.length; i++) {
        res.push(anagrams[anagramsKeys[i]]);
    }
    
    return res;
};
