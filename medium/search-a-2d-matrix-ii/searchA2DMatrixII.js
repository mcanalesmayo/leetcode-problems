/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix === null || matrix.length === 0) {
        return false;
    }
    const m = matrix.length;
    const n = matrix[0].length;
    
    let i = m - 1, j = 0;
    while (i >= 0 && j < n) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] > target) {
            i--;
        } else {
            j++;
        }
    }
    
    return false;
};
