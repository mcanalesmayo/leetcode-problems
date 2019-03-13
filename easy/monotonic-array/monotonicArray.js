/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (A.length === 1) {
        return true;
    }
    
    let i = 0;
    for (; i < A.length - 1 && A[i] === A[i+1]; i++);
    const bIsAscending = A[i] < A[i+1];
    
    for (; i < A.length - 1; i++) {
        if ((bIsAscending && A[i] > A[i+1])
            || (!bIsAscending && A[i] < A[i+1])) {
            return false;
        }
    }
    
    return true;
};
