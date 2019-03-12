/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // The sum of the ideal array should be 0 + 1 + 2 + 3 + ... + n.length, which is an arithmetic series:
    // arithSeriesSum = (n.length*(n.length+1))/2
    // Hence, the missing number is the sum of the arithmetic series - the sum of the actual array
    return (nums.length*(nums.length+1))/2 - nums.reduce((prev, curr) => prev + curr, 0);
};
