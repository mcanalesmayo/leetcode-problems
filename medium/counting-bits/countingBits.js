/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let res = new Array(num + 1), powerOfTwo = 1;
    
    // Pattern:
    // 0 --> 0
    // 1 --> 1
    // 2 --> 1
    // 3 --> 2
    // 4 --> 1
    // 5 --> 2
    // 6 --> 2
    // 7 --> 3
    // 8 --> 1
    // 9 --> 2
    // 10 --> 2
    // 11 --> 3
    // 12 --> 2
    // 13 --> 3
    // 14 --> 3
    // 15 --> 4
    // 16 --> 1
    // 17 --> 2
    // 18 --> 2
    // 19 --> 3
    // 20 --> 2
    // 21 --> 3
    // 22 --> 3
    // 23 --> 4
    // 24 --> 2
    // 25 --> 3
    // 26 --> 3
    // 27 --> 4
    // 28 --> 3
    // 29 --> 4
    // 30 --> 4
    // 31 --> 5
    // 32 --> 1
    
    res[0] = 0;
    for (let i = 1; i <= num; i++) {
        if (powerOfTwo === i) {
            res[i] = 1;
            powerOfTwo *= 2;
        } else {
            res[i] = res[powerOfTwo/2] + res[i - powerOfTwo/2];
        }
    }
    
    return res;
};
