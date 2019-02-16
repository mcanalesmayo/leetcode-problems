/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    let jewelTypes = {}, count = 0;
    
    for (let i = 0; i < J.length; i++) {
        jewelTypes[J.charAt(i)] = true;
    }
    
    for (let i = 0; i < S.length; i++) {
        if (jewelTypes[S.charAt(i)]) {
            count++;
        }
    }
    
    return count;
};
