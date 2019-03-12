/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // Find the first zero if any
    let zeroPos = 0, i = 0;
    while (nums[i] !== 0 && i < nums.length) {
        i++;
    }
    zeroPos = i;
    
    for (; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[zeroPos] = nums[i];
            nums[i] = 0;
            zeroPos++;
        }
    }
};
