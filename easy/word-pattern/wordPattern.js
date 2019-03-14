/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    const wordToMatch = {}, matchToWord = {};

    let k = 0;
    for (let i = 0; i < str.length; i++, k++) {
        // Find the next word
        let word = '', char;
        for (; i < str.length && (char = str.charAt(i)) !== ' '; i++) {
            word += char;
        }
        
        let matcher = pattern.charAt(k);
        if (!wordToMatch[word] && !matchToWord[matcher]) {
            // Word and letter in the pattern were not observed before
            wordToMatch[word] = matcher;
            matchToWord[matcher] = word;
        } else if (!wordToMatch[word] || wordToMatch[word] !== matcher) {
            // Either word or letter in the pattern was observed before
            return false;
        }
    }
   
    // In case there are not as many words as letters in the pattern
    return k === pattern.length;
};
