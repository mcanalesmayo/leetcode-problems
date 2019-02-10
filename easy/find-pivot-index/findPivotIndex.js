/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if (nums.length <= 2) {
        return -1;
    }
    
    // Set up first left and right sums
    let leftSum = 0, rightSum = 0, pivot = 1;
    while (pivot < nums.length) {
        rightSum += nums[pivot];
        pivot++;
    }
    
    // Find the pivot
    pivot = 0;
    while (pivot < nums.length) {
        if (leftSum === rightSum) {
            return pivot;
        }
        
        leftSum += nums[pivot];
        rightSum -= nums[pivot + 1];
        pivot++;
    }
  
    // If no pivot found, return ERR code
    return -1;
};
