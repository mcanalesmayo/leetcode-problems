/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    if (candidates.length === 0) {
        return target === 0 ? [[]] : [];
    }

    candidates.sort();
    const res = {};
    const checkedMasks = {};
    const allVisitedMask = (1 << candidates.length) - 1;
    
    function recCombinationSum(numsMask, target) {
        // Skip if it was previously computed
        if (checkedMasks[numsMask]) {
            return;
        }

        if (target === 0) {
            const combination = [];
            // Iterate mask bits and add solution
            for (let i = 0; i < candidates.length; i++) {
                const currentBit = (1 << i);
                if ((numsMask & currentBit) === currentBit) {
                    combination.push(candidates[i]);
                }
            }
            res[combination.toString()] = combination;
        }
        
        if (numsMask === allVisitedMask) {
            // Base case
            return;
        }
        
        for (let i = 0; i < candidates.length; i++) {
            const currentBit = 1 << i;
            // Check if already visited by recursive calls on top of the current one
            if ((numsMask & currentBit) === currentBit) {
                continue;
            }
            
            // Keep exploring
            const newMask = numsMask | currentBit;
            recCombinationSum(newMask, target - candidates[i]);
            // Mark as checked no matter the result, so that recomputing same results is avoided
            checkedMasks[newMask] = newMask;
        }
    }
    
    recCombinationSum(0, target);
    
    return Object.values(res);
};
