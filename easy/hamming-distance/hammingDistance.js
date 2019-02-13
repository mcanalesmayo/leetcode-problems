/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let count = 0, xor = x^y;
    
    for (let i = 0; i < 32; i++) {
        let mask = 1 << i;
        if ((xor & mask) === mask) {
            count++;
        }
    }
    
    return count;
};
