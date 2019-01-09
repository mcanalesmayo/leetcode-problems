/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if (popped.length === 0) {
        return true;
    }

    let stack = [];
    let i = 0, j = 0;
    while (i < pushed.length) {
        stack.push(pushed[i]);
        while (stack.length > 0 && stack[stack.length-1] === popped[j]) {
            stack.pop();
            j++;
        }
        i++;
    }
    
    return stack.length === 0;
};
