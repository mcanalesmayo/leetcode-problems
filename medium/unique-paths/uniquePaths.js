/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let possibleWaysUntil = new Array(m).fill(null).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        // There's only one possible way to reach the cells in the first column
        possibleWaysUntil[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        // There's only one possible way to reach the cells in the first row
        possibleWaysUntil[0][j] = 1;
    }
    
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            possibleWaysUntil[i][j] = possibleWaysUntil[i-1][j] + possibleWaysUntil[i][j-1];
        }
    }
    
    return possibleWaysUntil[m-1][n-1];
};
