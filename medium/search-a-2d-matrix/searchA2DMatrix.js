/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    
    // Binary search considering it a sorted array
    const n = matrix.length;
    const m = matrix[0].length;
    
    let l = 0, r = m*n - 1;
    while (l < r){
        const midIdx = parseInt((l + r - 1)/2);
        const midNum = matrix[parseInt(midIdx/m)][midIdx%m];
        if (midNum === target) {
            return true;
        } else if (midNum < target) {
            l = midIdx + 1;
        } else {
            r = midIdx;
        }
    }
    return matrix[parseInt(r/m)][r%m] === target;
};
