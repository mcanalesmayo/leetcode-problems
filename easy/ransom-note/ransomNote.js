/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (magazine.length === 0 < ransomNote.length) {
        return false;
    }
    
    const IDX_SHIFT = -97;
    const NUM_LETTERS_IN_ALPHABET = 26;
    const letters = new Array(NUM_LETTERS_IN_ALPHABET).fill(0);
    
    for (let i = 0; i < magazine.length; i++){
        letters[magazine.charCodeAt(i) + IDX_SHIFT]++;
    }
    
    for (let i = 0; i < ransomNote.length; i++) {
        const idx = ransomNote.charCodeAt(i) + IDX_SHIFT;
        if (letters[idx] === 0) {
            return false;
        } else {
            letters[idx]--;
        }
    }
    
    return true;
};
