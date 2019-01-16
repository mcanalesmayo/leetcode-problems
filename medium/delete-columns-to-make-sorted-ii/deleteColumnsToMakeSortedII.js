/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    if (A.length <= 1) {
        return 0;
    }
    
    let wordLength = A[0].length, numMoves = 0, skippables = new Array(wordLength - 1);
    for (let i = 0; i < wordLength; i++) {
        let columnStays = true, potentialSkippable = [];
        for (let k = 0; k < A.length - 1; k++) {
            if (skippables[k]) {
                continue;
            }

            let currChar = A[k].charAt(i), nextChar = A[k+1].charAt(i);
            if (currChar > nextChar) {
                columnStays = false;
                numMoves++;
                break;
            } else if (currChar < nextChar) {
                potentialSkippable.push(k);
            }
        }
        
        if (columnStays) {
            for (let k = 0; k < potentialSkippable.length; k++) {
                skippables[potentialSkippable[k]] = true;
            }
        }
    }
    
    return numMoves;
};
