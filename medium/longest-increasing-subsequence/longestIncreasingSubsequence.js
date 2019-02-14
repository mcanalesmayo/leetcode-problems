/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length <= 1) {
        return nums.length;
    }

    let max = 0, partialLLIS = new Array(nums.length);
    
    partialLLIS[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; i--) {
        let currLongest = 0;
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] < nums[k]) {
                currLongest = Math.max(currLongest, partialLLIS[k]);
            }
        }
        partialLLIS[i] = currLongest + 1;
        max = Math.max(max, partialLLIS[i]);
    }
    
    return max;
};
