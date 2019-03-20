/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let res = 0;
    
    function recFindTargetSumWays(i, acc) {
        if (i === 0) {
            if (acc + nums[i] === S) {
                res++;
            }
            if (acc - nums[i] === S) {
                res++;
            }
            
            return;
        }
        
        recFindTargetSumWays(i - 1, acc + nums[i]);
        recFindTargetSumWays(i - 1, acc - nums[i]);
    }
    
    recFindTargetSumWays(nums.length - 1, 0);
    
    return res;
};
