/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const oAux = {};
    var iCurrValue, iCurrIdx, iNeededValue, iNeededIdx;
    
    for (iCurrIdx = 0; iCurrIdx < nums.length; iCurrIdx++) {
        iCurrValue = nums[iCurrIdx];
        iNeededValue = target - iCurrValue;
        iNeededIdx = oAux[iNeededValue];

        if (iNeededIdx !== undefined) {
            return [ iNeededIdx, iCurrIdx ];
        }
        
        oAux[iCurrValue] = iCurrIdx;
    }
};
