/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) {
        return true;
    }
    
    const OPEN_PAR = '(';
    const OPEN_BRACES = '{';
    const OPEN_BRACKET = '[';
    const CLOSE_PAR = ')';
    const CLOSE_BRACES = '}';
    const CLOSE_BRACKET = ']';
    const stack = [];
    
    let curr;
    
    for (let i = 0; i < s.length; i++) {
        curr = s[i];
        switch(curr) {
            case OPEN_PAR:
            case OPEN_BRACES:
            case OPEN_BRACKET:
                stack.push(curr);
                break;
            case CLOSE_PAR:
                if (stack[stack.length-1] === OPEN_PAR) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case CLOSE_BRACES:
                if (stack[stack.length-1] === OPEN_BRACES) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
            case CLOSE_BRACKET:
            default:
                if (stack[stack.length-1] === OPEN_BRACKET) {
                    stack.pop();
                } else {
                    return false;
                }
                break;
        }
    }
    
    return stack.length === 0;
};
