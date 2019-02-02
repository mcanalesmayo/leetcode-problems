/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
    // N = (A|B|C|D).length
    let res = 0, n = A.length, abMap = {}, cdMap = {}, sum, nums, currNum, complementary;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            sum = A[i] + B[j];
            abMap[sum] ? abMap[sum]++ : abMap[sum] = 1;
            
            sum = C[i] + D[j];
            cdMap[sum] ? cdMap[sum]++ : cdMap[sum] = 1;
        }
    }
    
    nums = Object.keys(abMap);
    for (let i = 0; i < nums.length; i++) {
        currNum = nums[i];
        complementary = -currNum;
        if (cdMap[complementary]) {
            res += abMap[currNum] * cdMap[complementary];
        }
    }
    
    return res;
};
