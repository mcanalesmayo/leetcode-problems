/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    let numsR = nums.length, numsC = nums[0].length, inputLen = numsR * numsC, outputLen = r * c;
    if (inputLen !== outputLen) {
        return nums;
    }
    
    let outputMat = Array(r).fill(null).map(() => Array(c));
    
    let inR = 0, inC = 0, outR = 0, outC = 0;
    for (let nIdx = 0; nIdx < outputLen; nIdx++) {
        outputMat[outR][outC] = nums[inR][inC];
        inC = (inC + 1) % numsC;
        if (inC === 0) {
            inR = (inR + 1) % numsR;
        }
        outC = (outC + 1) % c;
        if (outC === 0) {
            outR = (outR + 1) % r;
        }
    }
    
    return outputMat;
};
