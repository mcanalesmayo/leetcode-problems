/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (nums.length === 0) {
        return [];
    }
    
    const res = new Array(nums.length - k + 1);
    
    let i, currMaxI = 0, currMaxVal = nums[0];
    for (i = 1; i < k; i++) {
        if (nums[i] >= currMaxVal) {
            currMaxVal = nums[i];
            currMaxI = i;
        }
    }
    
    res[0] = currMaxVal;
    for (let resI = 1; i < nums.length; i++, resI++) {
        if (nums[i] >= currMaxVal) {
            currMaxVal = nums[i];
            currMaxI = i;
        } else if (i - k + 1 > currMaxI) {
            currMaxI = i - k + 1;
            currMaxVal = nums[i - k + 1];
            // Explore from currMaxI until i
            for (let j = i - k + 2; j <= i; j++) {
                if (nums[j] >= currMaxVal) {
                    currMaxVal = nums[j];
                    currMaxI = j;
                }
            }
        }
        
        res[resI] = currMaxVal;
    }
    
    return res;
};
