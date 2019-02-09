/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    // The problem can be considered as finding the longest path in a graph
    // which is represented by the input array
    
    if (nums.length <= 2) {
        return nums.length;
    }
    
    let max = 0;

    // Will keep track of visited nodes
    let visitedNodes = {};
    function recLongestGraphPath(vertex, nodesCounter) {
        if (visitedNodes[vertex]) {
            return nodesCounter;
        }
        
        visitedNodes[vertex] = true;
        return recLongestGraphPath(nums[vertex], nodesCounter + 1);
    }

    // Make sure all paths are explored
    // TODO: Avoid exploring more paths if max is g.e. than (nums.length - non visited nodes)
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, recLongestGraphPath(i, 0));
    }
    
    return max;
};
