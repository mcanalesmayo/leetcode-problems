/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    if (nums.length === 2) {
        return [ nums[1], nums[0] ];
    }
    
    let res = new Array(nums.length);
    res[0] = 1;
    for (let i = 1; i < nums.length; i++) {
        res[i] = res[i-1] * nums[i-1];
    }

    let rightMul = nums[nums.length-1];
    for (let i = nums.length-2; i > 0; i--) {
        res[i] = res[i] * rightMul;
        rightMul *= nums[i];
    }
    res[0] = rightMul;
    
    return res;
};
