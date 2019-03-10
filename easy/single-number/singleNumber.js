/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // num XOR num = 0
    // So doing XOR on all the numbers should retrieve the number which is not duplicated
    return nums.reduce((prev, curr) => prev^curr, 0);
};
