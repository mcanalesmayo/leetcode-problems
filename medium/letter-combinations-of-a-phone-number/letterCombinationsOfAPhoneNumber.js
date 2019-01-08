/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    
    let map = {
        '2': [ 'a', 'b', 'c' ],
        '3': [ 'd', 'e', 'f' ],
        '4': [ 'g', 'h', 'i' ],
        '5': [ 'j', 'k', 'l' ],
        '6': [ 'm', 'n', 'o' ],
        '7': [ 'p', 'q', 'r', 's' ],
        '8': [ 't', 'u', 'v' ],
        '9': [ 'w', 'x', 'y', 'z' ]
    };
    let memo = {};
    
    function recComb(digits, i) {
        if (memo[i]) {
            return memo[i];
        }
        if (i == digits.length - 1) {
            memo[i] = map[digits.charAt(i)];
            
            return memo[i];
        }

        let letters = map[digits.charAt(i)];
        let res = [];
        
        for (let k = 0; k < letters.length; k++) {
            let tail = recComb(digits, i + 1);
            for (let l = 0; l < tail.length; l++) {
                res.push(letters[k] + tail[l]);
            }
        }
        
        memo[i] = res;
        return res;
    }
    
    return recComb(digits, 0);
};
