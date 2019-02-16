/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    // The problem is similar to 'longest common substring'
    
    if (A.length === 0 || B.length === 0) {
        return 0;
    }
    
    // Initialize dp matrix taking into account input arrays are not guaranteed to have the same length
    let max = 0, longestCommon = Array(A.length + 1).fill(null).map(() => Array(B.length + 1).fill(0));
    for (let i = 1; i <= A.length; i++) {
        for (let j = 1; j <= B.length; j++) {
            if (A[i-1] === B[j-1]) {
                longestCommon[i][j] = 1 + longestCommon[i-1][j-1];
                max = Math.max(max, longestCommon[i][j]);
            }
        }
    }
    
    return max;
};
