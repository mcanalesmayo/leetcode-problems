/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    const UNSIGNED_UPPER_TH = 2147483647;
    const UNSIGNED_LOWER_TH = 2147483648;
    const match = /^\s*([+-]?)(\d+)/.exec(str);
    var res;
    
    if (match) {
        res = parseInt(match[2]);

        switch (match[1]) {
            case '-':
                if (res > UNSIGNED_LOWER_TH) {
                    res = UNSIGNED_LOWER_TH;
                }
                return - res;
            default:
                if (res > UNSIGNED_UPPER_TH) {
                    res = UNSIGNED_UPPER_TH;
                }
                return res;
        }
    } else {
        return 0;
    }
};