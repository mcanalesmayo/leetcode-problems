/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
    let res = [];
    
    function recLexicalOrder(num) {
        if (num > n) {
            return;
        }

        res.push(num);
        
        let next = num * 10;
        for (let i = 0; i < 10 && next <= n; i++) {
            recLexicalOrder(next);
            next++;
        }
    }
    
    for (let i = 1; i < 10 && i <= n; i++) {
        recLexicalOrder(i);
    }
    
    return res;
};
