/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    // N = (A|B|C|D).length
    let res = 0, n = A.length, abMap = {}, sum, complementary;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum = A[i] + B[j];
            abMap[sum] ? abMap[sum]++ : abMap[sum] = 1;
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            complementary = - (C[i] + D[j]);
            if (abMap[complementary]) {
                res += abMap[complementary];
            }
        }
    }
    
    return res;
};
